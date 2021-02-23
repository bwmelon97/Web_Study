


[localtunnel 사용법 안내 블로그](https://kibua20.tistory.com/151)


```bash
$ sudo lsof -iTCP:4000 -sTCP:LISTEN     // 실행중인 서버 프로세스 찾기
$ kill [pid]                            // 프로세스 종료
```