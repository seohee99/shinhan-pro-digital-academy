from bs4 import BeautifulSoup
import pymysql
import requests
import re

def insert_data(conn):
    # 텍스트 파일에서 URL 한줄씩 읽기
    with open("github_profile.txt", "r") as f:
        urls = f.readlines()

    # 각 URL마다 정보 읽기
    for url in urls:
        url = url.strip() # 줄바꿈 제거
        response = requests.get(url)

        soup = BeautifulSoup(response.text, 'html.parser')
        text = soup.get_text()[:100]
        text = re.sub('[^가-힣0-9a-zA-Z\\s]', '', text)

        name = url.split("github.io/")[-1][:-1]
        #print(name)
        #print(text.strip())
        cur = conn.cursor()
        insert_query = f"INSERT INTO github_data (id, url, text) VALUES ('{name}', '{url}', '{text}')"
        cur.execute(insert_query)
        conn.commit()

def create_conn():
    conn = pymysql.connect(
        host='', # rds 엔드포인트
        port=, # 포트번호
        db='', # 데이터베이스 이름
        user='', 
        passwd='',
        charset='utf8mb4'
        )
    return conn

def main():
    conn = create_conn()
    print("Connection Success")
    #insert_data_test(conn)
    insert_data(conn)
    conn.close()

if __name__ == "__main__":
    main()

