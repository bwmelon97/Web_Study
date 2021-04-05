# AWS Study

지역(Region) - 아마존 컴퓨터가 물리적으로 위치한 지역

가용구역(AZ) - 지역 내에 나뉘어져 있는 건물 (각각의 AZ는 전용망으로 연결됨)

지역은 실제로 서비스의 사용자들과 가까운 곳으로 설정하는 것이 옳다.

현재 나의 컴퓨터에서 AWS Region 까지의 Ping을 테스트해주는 사이트

[CloudPing.info](https://www.cloudping.info/)

## EC2 Service

EC2(Elastic Compute Cloud)는 독립된 컴퓨터를 임대해주는 서비스

### EC2 인스턴스 생성

1. 운영체제 선택
2. 컴퓨터 cpu, 메모리 등등 기능 선택 → 가격 정책 참고
3. 인스턴스 세부 설정
4. 저장장치 추가
5. 태그
6. Security Group
7. 인스턴스 비밀번호 생성

### 가격 정책

aws ec2 price 구글링하면 나옴 [https://aws.amazon.com/ko/ec2/pricing/](https://aws.amazon.com/ko/ec2/pricing/)