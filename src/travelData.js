// src/data/travelData.js
const travelData = {
    title: "2025 대만여행",
    days: [
        {
            date: "2월27일",
            lists: [
                {
                    type: "default",
                    info: {
                        time: "07:00",
                        title: "인천공항 제2터미널",
                        details: "각자알아서 시간준수!",
                    },
                    thumbs: [
                        "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/330547067-1704419282150.jpg",
                    ],
                    links: [
                        { name: "온라인입국신고서", url: "https://niaspeedy.immigration.gov.tw/webacard/index" },
                        { name: "작성방법", url: "https://assamlife.tistory.com/97" },
                        { name: "럭키드로우", url: "https://blog.naver.com/dreaminguth/223448810351" },
                    ],
                },
                {
                    type: "default",
                    info: {
                        time: "07:00 ~ 09:40",
                        title: "체크인/면세점/식사",
                        details: "간단한식사 및 커피",
                    },
                    thumbs: [
                        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMjFfMTQw%2FMDAxNTc2ODkxODIwNTU2.-rOpZhMXY-B9x7SjtugDn2B2KWRbqG3tyg7W_pmeb2Ug._vkp0lffY1yM1nwdsQ7wDyEhZ3eQe46G4NGq6E9ofscg.JPEG.chlwjdgml4%2FIMG_0626.jpg&type=sc960_832",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_154%2F1713326622940mGVPe_JPEG%2F%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25BA%25CF%25C3%25A2%25B5%25BF%25BC%25F8%25B5%25CE%25BA%25CE.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_75%2F1713326614024wpfqX_JPEG%2F%25C0%25CE%25C3%25B5%25B0%25F8%25C7%25D7_T2_%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25B8%25DE%25B4%25BADID_%2528%25BC%25BC%25B7%25CE%2529_220524_%25B1%25B3%25B5%25BF%25C2%25AB%25BB%25CD%2528%25BF%25A9%25B8%25A7%2529.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_81%2F1713326605338PfUwO_JPEG%2F%25C0%25CE%25C3%25B5%25B0%25F8%25C7%25D7_T2_%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25B8%25DE%25B4%25BADID_%2528%25BC%25BC%25B7%25CE%2529_230829_%25C7%25D1%25BF%25C1%25C1%25FD_%25B1%25E8%25C4%25A1%25C2%25F2.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_249%2F1713326592671cdJGE_JPEG%2F%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25BF%25EB%25C8%25A3%25B3%25AB%25C1%25F6.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_251%2F17133265817698rsdF_JPEG%2F%25C0%25CE%25C3%25B5%25B0%25F8%25C7%25D7_T2_%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25B8%25DE%25B4%25BADID_%2528%25BC%25BC%25B7%25CE%2529_230829_%25C1%25A4%25BD%25C9%25BC%25BA%25C0%25C7%25C7%25D8%25C0%25E5%25B1%25B9.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240417_152%2F1713326561879fTgm8_JPEG%2F%25C7%25C1%25B7%25B9%25C1%25A8%25C5%25D7%25C0%25CC%25BC%25C71.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240501_86%2F1714539463895dC2QB_JPEG%2F%25C0%25CE%25C3%25B5%25B0%25F8%25C7%25D7_T2_%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25B8%25DE%25B4%25BADID_%2528%25BC%25BC%25B7%25CE%2529_240422_%25BC%25D6%25B8%25B8%25B5%25CE.jpg",
                        "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240501_153%2F1714539470972Ntbq2_JPEG%2F%25C0%25CE%25C3%25B5%25B0%25F8%25C7%25D7_T2_%25C7%25D1%25BD%25C4%25B9%25CC%25B4%25E3%25B1%25E6_%25B8%25DE%25B4%25BADID_%2528%25BC%25BC%25B7%25CE%2529_240422_%25BC%25D6%25B8%25DE%25B9%25D0.jpg",
                    ],
                    links: [
                        {name: "위치정보", url:"https://naver.me/x35Hx9gm"}
                    ],
                },
                {
                    type: "move",
                    icon: "planeStart",
                    price: '',
                    info: {
                        time: "9:40 ~ 11:30",
                        title: "출국(진에어)",
                        details: "인천공항 → 타오위엔공항",
                    },
                },
                {
                    type: "default",
                    info: {
                        time: "11:30 ~ 12:30",
                        title: "입국심사",
                        details: "ATM환전/교통카드구매",
                    },
                    thumbs: [
                        "https://i.namu.wiki/i/D4JOpMDTIyKKFqeh7F73EEMFDze1r5OorPVZky50Whi_H4mA2rwHFcqDEQ5TeBWVHjd0-OYu9qKb3bUVXZlWQw.webp",
                    ],
                    links: [
                        { name: "교통카드 구매방법", url: "https://blog.naver.com/playce/223610734754" },
                        { name: "ATM환전", url: "https://blog.naver.com/gluttonpenguin/223465112656" },
                    ],
                },
                {
                    type: "move",
                    icon: "subway",
                    price: '',
                    info: {
                        time: "12:30 ~ 13:30",
                        title: "숙소이동",
                        details: "타오위엔공항 → 숙소",
                    },
                },
                {
                    type: "default",
                    info: {
                        time: "13:30 ~ 14:00",
                        title: "숙소체크인",
                        details: "캐리어보관 후 식당이동",
                    },
                    thumbs: [
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-1235315932877643684/original/e67c5464-3f9c-4b60-bce3-f4538bf68b10.jpeg?im_w=1200",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-1235315932877643684/original/0baabdad-5278-428d-85ae-940a51619233.jpeg?im_w=1440",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-1235315932877643684/original/9aee2121-d6e5-4991-8732-b4f9ca30366a.jpeg?im_w=1440",
                        "https://a0.muscache.com/im/pictures/hosting/Hosting-1235315932877643684/original/4dcc1d83-37e2-4e9f-85a1-f561ead43139.jpeg?im_w=1440",
                    ],
                    links: [
                        { name: "airbnb", url: "https://www.airbnb.co.kr/rooms/1235315932877643684?check_in=2025-02-20&check_out=2025-02-23&guests=1&adults=4&s=67&unique_share_id=1ac2c393-4930-46b2-8ae4-3627e0eac56e" },
                    ],
                },
                {
                    type: "default",
                    info: {
                        time: "14:00 ~ 14:30",
                        title: "소오우육면",
                        details: "점심식사 - 우육면,물만두 (로컬식당)",
                    },
                    thumbs: [
                        "https://media-cdn.tripadvisor.com/media/photo-s/06/9c/e3/fe/taiwan-beef-noodle.jpg",
                        "https://blog.kakaocdn.net/dn/bOVvv9/btsfOIXiNnB/HJKhHR7a9KB8s4fsdvLOjK/img.jpg",
                        "https://blog.kakaocdn.net/dn/daYR9F/btsftKaxLBH/Lyw6OYR5NYjVvObzIVWYQK/img.jpg",
                    ],
                    links: [
                        { name: "google", url: "https://maps.app.goo.gl/tu5EPqA9XP9nbiZk8"},
                        { name: "후기", url: "https://blog.naver.com/azalea_1997/223587116906" },
                    ],
                },
                {
                    type: "default",
                    info: {
                        time: "14:30 ~ 15:00",
                        title: "아이스크림",
                        details: "아이스크림사서 타이페이메인역으로 이동",
                    },
                    thumbs: [
                        "https://dm0520.com/wp-content/uploads/2023/07/3456icecream-047.jpg",
                        "https://obs.line-scdn.net/0hm-JhqN6JMgJ3ESCkWDtNVUxHPnNEZDYEDCMgelMXaTNZJiIDV391YVsNaTEPJmldSnV0eAcYaDsPI3YGHHR0Zw",
                        "https://lh3.googleusercontent.com/aN9mF-PprkdNgkhgauPinBFLQOrBmSGXtATrueW9r7TP1T3dI5nLC9p0uFB_gZJq4LEMlcPDrca-wrdZPWAT-vksq-RO1L-ImNqbD9bq8Go=s600",
                    ],
                    links: [
                        { name: "google", url: "https://maps.app.goo.gl/AcMQP2sExTZM2e7R7"},
                        { name: "후기", url: "https://blog.naver.com/cullen_/223420252137" },
                    ],
                },
                {
                    type: "move",
                    icon: "subway",
                    price: '',
                    info: {
                        time: "15:00 ~ 16:00",
                        title: "단수이이동",
                        details: "점심식당 → 단수이",
                    },
                },
                {
                    type: "default",
                    info: {
                        time: "16:00 ~ 17:00",
                        title: "홍마오청",
                        details: "홍마오청 구경 +@ 진리대학 (티켓필요)",
                    },
                    thumbs: [
                        "https://d2mgzmtdeipcjp.cloudfront.net/files/good/2019/06/28/15616938677176.png",
                        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu0u8Y%2FbtrZ70632Zf%2FIAsHtSJinZ8d77zHfcA2Q1%2Fimg.jpg",
                        "https://newtaipei.travel/content/images/attractions/43702/1920x1080_attractions-image-hql7zyojt06cksoyv8d30w.jpg",
                        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/113ae801-c1dd-4106-9632-092ccefcd081.jpeg",
                        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/76a6f4fd-df38-464e-a3f1-115910e8bc36.jpeg",
                    ],
                    links: [
                        { name: "홍마오청", url: "https://maps.app.goo.gl/eso4mCaRgvoyX8HZ6"},
                        { name: "진리대학", url: "https://maps.app.goo.gl/A3trkBQ6YFVoivaR6"},
                        { name: "후기", url: "https://blog.naver.com/vogue98/223493884652" },
                        { name: "후기", url: "https://blog.naver.com/yujigraphy/223617385109" },
                    ],
                },
                {
                    type: "move",
                    icon: "walk",
                    price: '',
                    info: {
                        time: "17:00 ~ 17:30",
                        title: "피셔맨스워프",
                        details: "버스 or 걷기",
                    },
                },
                {
                    type: "default",
                    info: {
                        time: "17:30 ~ 18:30",
                        title: "스타벅스",
                        details: "일몰감상 - 자리에 따라 다른카페 or 야외 이동",
                    },
                    thumbs: [
                        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/feed11a1-3bf2-4535-89d4-0a43a4af98d5.jpeg",
                        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbL1NpD%2FbtqytV6rdsK%2FcU5gPkwJ96MOzqRmNOKR3K%2Fimg.png",
                        "https://mblogthumb-phinf.pstatic.net/MjAxNzEyMjdfMjEg/MDAxNTE0MzM5NjE5MzU3.53Ww7cmwEw43-l86H53YDUbFqpeIMHkD0BhrSg1KqmAg.QeR9H0iLVQ0yR69YifKNVgdK8dQjIBBPjr30o7PZpawg.JPEG.dinyland/IMG_4247.jpg?type=w800",
                    ],
                    links: [
                        { name: "google", url: "https://maps.app.goo.gl/faHQVLM3du5KPcoV9"},
                        { name: "후기", url: "https://m.blog.naver.com/nicenomo/223155241011" },
                        { name: "후기", url: "https://m.blog.naver.com/nicenomo/223155241011" },
                    ],
                },
                {
                    type: "move",
                    icon: "boat",
                    price: '',
                    info: {
                        time: "18:30 ~ 19:00",
                        title: "저녁식당이동",
                        details: "페리로 이동 (이지카드OK)",
                    },
                },
                {
                    type: "default",
                    info: {
                        time: "19:00 ~ 20:00",
                        title: "저녁식사",
                        details: "따콰이 스테이크",
                    },
                    thumbs: [
                        "https://mblogthumb-phinf.pstatic.net/MjAyNDA1MzFfOTQg/MDAxNzE3MTYyNjUxNDU2.3fC5aj3_IuLihovxJE_Rc4ZdfE3-T6YCTStHq6tGV90g.2ziKC7d7bKxAYGL6-9WrORZr5NHSYXeMWp3fdi-nf3cg.JPEG/%EB%8C%80%EB%A7%8C%EB%8B%A8%EC%88%98%EC%9D%B4_(32).jpg?type=w800",
                        "https://mblogthumb-phinf.pstatic.net/MjAyNDA1MzFfMTIz/MDAxNzE3MTY0NDEwNzk4.-Ayfu3OcwYD0g3vlmNIbh46gY7nx5ADvPA9EcBA6vVYg.XP-WoZwlzjrxjJKx0zJ5Xq_ts5JpvBibrG_MzQjWJrkg.JPEG/%EB%8C%80%EB%A7%8C%EB%8B%A8%EC%88%98%EC%9D%B4_(16).jpg?type=w800",
                        "https://mblogthumb-phinf.pstatic.net/MjAyNDA1MzFfOTAg/MDAxNzE3MTYyODc3MTM0.wn23_E2ED1L0r0V0Ns97FjudgdYqpcap-hWWjcvo5eIg.qk9H6oiAA8sO5jAj378I33qBKxaMA3HZRNvPgjX4bJ4g.JPEG/%EB%8C%80%EB%A7%8C%EB%8B%A8%EC%88%98%EC%9D%B4_(14).jpg?type=w800",
                        "https://mblogthumb-phinf.pstatic.net/MjAxODA0MTRfNTEg/MDAxNTIzNjg2NzI5MDk4.3w4TQx72n0F0UPrkTAkrxWrlLEo7xi01lWJNQjyQLNcg.VHfkhKqU4v81QJj1s8GTqENuqjVt9N6v3c_moSymmg8g.JPEG.zhao110/2018-03-06-17-12-35.jpg?type=w800",
                    ],
                    links: [
                        { name: "google", url: "https://maps.app.goo.gl/mqorEZSrNDwP3nt57"},
                        { name: "후기", url: "https://blog.naver.com/buggy_travel/223594219898" },
                    ],
                },
                {
                    type: "move",
                    icon: "subway",
                    price: '',
                    info: {
                        time: "20:00 ~ 21:00",
                        title: "시먼딩이동",
                        details: "숙소근처로 이동",
                    },
                },
                {
                    type: "default",
                    info: {
                        time: "21:00 ~ 21:30",
                        title: "술자리준비",
                        details: "편의점 및 돈돈돈키에서 안주&술 구입",
                    },
                    thumbs: [
                        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMDVfMjQg%2FMDAxNzA3MTMzMTIxNjY3.AXEEXjjwygkPatdCWFQjZZHuEiLwZI514P2G3xCbFKog.GBJZGJ9wMfkqzYCjJnEwh1QGFmaq6b6HKfqrPDx2qvMg.JPEG.makeme99%2FIMG_8895.jpg&type=sc960_832",
                        "https://mblogthumb-phinf.pstatic.net/MjAyMzAyMTJfMjE4/MDAxNjc2MjAyODUwMDAx.ITXfduTSkeT0NTgBFYqQGS2i1toI9BGVOLvZMP0iJAkg.gsbjQk_O0WtZvetV1YfGUoc_-vx0smvGyy5dPuPywi8g.JPEG.1978mm/SE-1aad0e53-ecdf-4e63-8208-c065ad38f4cf.jpg?type=w800",
                        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTlfMjUy%2FMDAxNjc5MjE0NTgwOTE0.utcxPuJLQ7J2pSf8hTJifF3oFlAr6XkFkOvmm2NR8TYg.wLZz1fh-vQtu7bakYIorI10QJ7LksJHVC0_gdjXHoqog.JPEG.pepperazzi%2FIMG_0277.jpg&type=sc960_832",
                        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDNfMjUx%2FMDAxNjk2MzM2NzQzNzAw.JX1sT8gi80YHvbIidICbjx_4outfIZ3g0siBVqepqaQg.1q8sU9huRz8YQPPs6PEWXnG5YV_JvF8RwX7V7iX-0Ssg.PNG.akszhd3%2Fimage.png&type=sc960_832",
                    ],
                    links: [
                        { name: "돈돈돈키", url: "https://maps.app.goo.gl/yqJmfpmikgaZF1c9A"},
                        { name: "후기", url: "https://blog.naver.com/jii0623/223315767717" },
                    ],
                },
                {
                    type: "move",
                    icon: "subway",
                    price: '',
                    info: {
                        time: "21:30 ~ 21:40",
                        title: "숙소이동",
                        details: "씻고 한잔하고 자기",
                    },
                },
            ],
        },
        {
            date: "2월28일",
            lists: [
                {
                    type: "default",
                    info: {
                        time: "12:00 ~ 13:00",
                        title: "오사카 성 관광",
                        details: "입장권 구입 후 성 내부 관람",
                    },
                    thumbs: [
                        "https://i.namu.wiki/i/dlxaRWAGt6oORy7od4B8tffh0taLfslDoMn6q_AGALw4nCvLzT_hIb8_uWE4tcLbz5At61X6CXtDrBpTYJ4rVQ.webp",
                        "https://cdn.osaka-info.jp/page_translation/content/fe4a9bc0-04c1-11e8-b6ee-06326e701dd4.jpeg",
                    ],
                    links: [
                        { name: "naver", url: "https://naver.com" },
                        { name: "tripadvisor", url: "https://tripadvisor.com" },
                    ],
                },
                {
                    type: "move",
                    icon: "bus",
                    price: 15,
                    info: {
                        time: "13:30 ~ 14:00",
                        title: "버스 이동",
                        details: "오사카 성 → 신사이바시",
                    },
                },
            ],
        },
        {
            date: "3월1일",
            lists: [
                {
                    type: "default",
                    info: {
                        time: "12:00 ~ 13:00",
                        title: "오사카 성 관광",
                        details: "입장권 구입 후 성 내부 관람",
                    },
                    thumbs: [
                        "https://i.namu.wiki/i/dlxaRWAGt6oORy7od4B8tffh0taLfslDoMn6q_AGALw4nCvLzT_hIb8_uWE4tcLbz5At61X6CXtDrBpTYJ4rVQ.webp",
                        "https://cdn.osaka-info.jp/page_translation/content/fe4a9bc0-04c1-11e8-b6ee-06326e701dd4.jpeg",
                    ],
                    links: [
                        { name: "naver", url: "https://naver.com" },
                        { name: "tripadvisor", url: "https://tripadvisor.com" },
                    ],
                },
                {
                    type: "move",
                    icon: "bus",
                    price: 15,
                    info: {
                        time: "13:30 ~ 14:00",
                        title: "버스 이동",
                        details: "오사카 성 → 신사이바시",
                    },
                },
            ],
        },
        {
            date: "3월2일",
            lists: [
                {
                    type: "default",
                    info: {
                        time: "12:00 ~ 13:00",
                        title: "오사카 성 관광",
                        details: "입장권 구입 후 성 내부 관람",
                    },
                    thumbs: [
                        "https://i.namu.wiki/i/dlxaRWAGt6oORy7od4B8tffh0taLfslDoMn6q_AGALw4nCvLzT_hIb8_uWE4tcLbz5At61X6CXtDrBpTYJ4rVQ.webp",
                        "https://cdn.osaka-info.jp/page_translation/content/fe4a9bc0-04c1-11e8-b6ee-06326e701dd4.jpeg",
                    ],
                    links: [
                        { name: "naver", url: "https://naver.com" },
                        { name: "tripadvisor", url: "https://tripadvisor.com" },
                    ],
                },
                {
                    type: "move",
                    icon: "bus",
                    price: 15,
                    info: {
                        time: "13:30 ~ 14:00",
                        title: "버스 이동",
                        details: "오사카 성 → 신사이바시",
                    },
                },
            ],
        },
    ],
};

export default travelData;
