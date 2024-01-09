import pymysql
def create_conn():
    conn = pymysql.connect(
        host='',
        port=, 
        db= '', 
        user='', 
        passwd='',
        charset='utf8mb4'
        )
    return conn
    
def print_data(conn):
    cur = conn.cursor()
    select_query = "SELECT * FROM github_data"
    cur.execute(select_query)

    rows = cur.fetchall()
    for row in rows:
        print(row)
        
    conn.commit()

def main():
    conn = create_conn()
    print("Connection Success")
    print_data(conn)
    conn.close()

if __name__ == "__main__":
    main()
