## AWS EC2 인스턴스 크기에 따른 비교


> 💡 **공통 조건**
- **아키텍처** : ARM
- **인스턴스** **패밀리** : t4
- **스토리지** : gp3, 80GiB
  
<br>

> 💡 **비교 조건**
- **인스턴스** **크기** : nano, small, micro

<br>

> 💡 **실험 내용**

- 인스턴스 크기만을 다르게 설정한 뒤 인스턴스 생성
- 각 인스턴스에 Anaconda 설치 후 가상 환경 생성
- 가상 환경에서 수강생의 Github 페이지를 Crawling하는 python 코드 실행
- 5번씩 실행 후 평균 계산
     - Crawling Code
       
        ```import requests
        from bs4 import BeautifulSoup
        imrpot requests
        import os
        import time
        
        start = time.time()
        
        # 텍스트 파일에서 URL 한줄씩 읽기
        with open("github_profile.txt", "r") as f:
            urls = f.readlines()
        
        # 각 URL마다 정보 읽기
        for url in urls:
            url = url.strip() # 줄바꿈 제거
            response = requests.get(url)
        
            soup = BeautifulSoup(response.text, 'html.parser')
            text = soup.get_text()
        
            name = url.split("github.io/")[-1][:-1]
        
            with open(os.path.join('github', f"{name}.txt"), "w", encoding='utf-8') as f:
                f.write(text)
                f.close()
                print(name + "수집/저장 완료")
        end = time.time()
        
        print(f"{end - start} 초")
        
        
<br>

> 💡 **실험 결과**

**실행 속도**

| t4g.nano | t4g.micro | t4g.small |
| --- | --- | --- |
| 1.946 sec | 2.032 sec | 2.001 sec |

- nano의 인스턴스가 가장 작기 때문에 가장 느릴 줄 알았는데, nano < small < micro 순서대로 빠르게 나왔다.

<br>

**AWS 공식 문서에 나와있는 인스턴스 사양**

![image](https://github.com/seohee99/shinhan-pro-digital-academy/assets/53520867/3542a7e1-03b7-4ae8-a3d3-4b10244e1f86)

- AWS 공식 문서를 확인해보니 각 인스턴스마다 CPU 개수는 같으나 메모리, 기준 성능, 크레딧 사용량이 다른 점을 보고, 인스턴스가 얼마나 많은 CPU 성능을 사용할 수 있는지를 결정하는 지표인 **CPU 크레딧 사용량**을 비교해 보았다.

<br>

**크레딧 사용량**

| t4g.nano | t4g.micro | t4g.small |
| --- | --- | --- |
| 0.308 | 0.371 | 0.193 |

- 실행한 코드가 CPU 성능에 영향을 미칠 정도로 복잡하지 않았기 때문에 크레딧 사용량은 실행 속도에 영향을 미치지 않는 듯 하다.
- 결과 : 인스턴스 크기보다는 프로세서나 아키텍처의 차이가 더 유의미한 비교가 될 것 같다.

<br>
<br>

<details><summary>  🏷️ 다른 팀의 비교 실험 결과  </summary>

<br>

✔️ **인스턴스 유형에 따른 비교**

| 유형 | 속도 |
| --- | --- |
| T (t4g.medium) | 2.20709sec |
| M (m7g.medium) | 2.55987sec |
| C (c6g.medium) | 2.98004sec |
| R (r7g.medium) | 2.23438sec |

| 유형 | 속도 |
| --- | --- |
| T (t4g.large) | 3.03277sec |
| M (m7g.large) | 1.57799sec |
| C (c6g.large) | 3.08457sec |
| R (r7g.large) | 4.92406sec |
- M 유형을 선택하는 것이 비용면, 속도면에서 가장 적합할 것 같음!

<br>
<br>

✔️ **T계열 small 인스턴스 비교**

- t2.small과 t3.small의 실행시간
    - t2.small : 2.3684
    - t3.small : 2.8644
- t2, t3의 프로세서는 각 최대 3.3GHz, 3.1GHz의 주파수를 가지고 실행하기 때문에 더 좋은 성능을 내는 t2가 실행 속도가 빠른 결과를 냈음!

</details>
