# Backend Study

## 프로젝트 List

* graphql-api
* nest

.

---

.

## 프로세스 강제 종료
(codespace 비정상 종료 시 app이 종료되지 않는 경우에 사용) 
```bash
$ sudo lsof -iTCP:3000 -sTCP:LISTEN     // 실행중인 서버 프로세스 찾기
$ kill [pid]                            // 프로세스 종료
```
.
## Local Tunnel 
[github링크](https://github.com/localtunnel/localtunnel)

```bash
$ npx localtunnel --port 3000 --subdomain soogeun
# localhost의 3000 포트에 실행된 앱에 접근 가능한 https://soogeun.loca.lt 주소를 준다.
```

local server에서 실행한 웹 어플리케이션(localhost)를 외부에서 접근할 수 있도록 해주는 라이브러리.

GET request 뿐만 아니라, POST, DELETE, PATCH등의 request를 보낼 수 있다. (cors error 없이)

local 환경이 아닌 클라우드 서버에서 Backend 어플리케이션을 실행하고 테스팅하고 싶을 때, 유용하게 사용할 수 있는 라이브러리. (Github Codespace)

- -**p, --port** Internal HTTP server port [필수]
- -**h, --host** Upstream server providing forwarding [기본: "https://localtunnel.me"]
- -**s, --subdomain** Request this subdomain [옵션]
- -**o, --open** Opens the tunnel URL in your browser**--print-requests** Print basic request info [옵션]

port 인자는 localhost의 어떤 port로 실행된 어플리케이션을 띄울 것인지.

subdomain 인자는 localtunnel이 반환해주는 url의 subdomain 값이다. subdomain 값을 설정해주면 항상 동일한 url을 주기 때문에 편리하다.

### [localtunnel 사용법 안내 블로그](https://kibua20.tistory.com/151)