"""
This script generate 5-years fixed based rate for mortgage in pkobp bank.
User can provide start date and end date to generate the range of dates.
Output is a dictionary of percentage values for each date in the range.
"""

import argparse
import datetime
from pprint import pprint
import re
import requests
from urllib.parse import urljoin

BASE_URL = "https://www.pkobp.pl/"
FIXED_BASED_PATTERN = r'\b\d+,\d+%'


def generate_date_range(start_date: str, end_date: str) -> list:
    """
    Generate date range between start and end date

    :param start_date: str: start date in format dd-mm-YYYY
    :param end_date: str: end date in format dd-mm-YYYY
    :return: list: list of dates between start and end date
    """
    start_dt = datetime.datetime.strptime(start_date, "%d-%m-%Y")
    end_dt = datetime.datetime.strptime(end_date, "%d-%m-%Y")
    date_generated = [(start_dt + datetime.timedelta(days=x)).strftime("%d-%m-%Y") for x in range(0, (end_dt-start_dt).days)]
    return date_generated


def get_data_for_date(date: str) -> str:
    """
    Get data for a given date

    :param date: str: date in format dd-mm-YYYY
    :return: float: fixed based rate for a given date
    :raised HTTPError: if status != 2xx
    """
    final_url = urljoin(BASE_URL, "waluty")
    params = {
        "part": "base_rate",
        "date": date
    }
    response = requests.get(final_url, params=params)
    if response.raise_for_status():
        print(f"Cannot GET 5-years fixed based rate: {response.status_code} \n{response.content}")
        return None
    return response.text


def extract_fixed_based_rate(content: str) -> float:
    """
    Extract fixed based rate from content

    :param content: str: content of the page
    :return: float: fixed based rate
    """
    match = re.search(FIXED_BASED_PATTERN, content)
    if match:
        try:
            fbr_val = float(match.group(0).replace(",", ".").replace("%", ""))
            return fbr_val
        except ValueError:
            print(f"Cannot convert {match.group(0)} to float")
            return None
    return None


def complete_data_for_none(data: dict) -> dict:
    """
    Complete data for None values

    :param data: dict: data to complete
    :return: dict: data with None values completed
    """
    prev_value = None
    for key, value in data.items():
        if value is not None:
            prev_value = value
        else:
            data[key] = prev_value
    return data


def save_csv(data: dict, output_file: str = "fixed_based_rate.csv"):
    """
    Save data to csv file

    :param data: dict: data to save
    :param output_file: str: output file name
    """
    with open(output_file, "w") as f:
        f.write("Date,FixedBasedRate\n")
        for key, value in data.items():
            f.write(f"{key},{value}\n")
    print(f"Data saved to {output_file}")


if __name__ == "__main__":
    # parse arguments
    parser = argparse.ArgumentParser(description="Generate 5-years fixed rate for mortgage in pkobp bank")
    parser.add_argument("--start_date", type=str, help="Start date in format dd-mm-YYYY")
    parser.add_argument("--end_date", type=str, help="End date in format dd-mm-YYYY")
    args = parser.parse_args()

    # define empty dictionary and start and end date
    fixed_based_rate = {}
    start_date = args.start_date
    end_date = args.end_date

    # generate fixed based rate for each date in the range
    date_range = generate_date_range(start_date, end_date)
    for date_str in date_range:
        fbr_data = get_data_for_date(date_str)
        fixed_based_rate[date_str] = extract_fixed_based_rate(fbr_data)
        print(f"{date_str}\t{fixed_based_rate[date_str]}")
    final_data = complete_data_for_none(fixed_based_rate)
    save_csv(final_data)
