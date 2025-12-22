document.addEventListener('DOMContentLoaded', () => {
    renderBooths();
    renderPerformances();
});

function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
}

function renderBooths() {
    const boothData = [
        {l: "1-1", n: "양분식 역", c: "1-1"}, {l: "1-2", n: "미스터리 공포 역", c: "1-2"},
        {l: "1-3", n: "요아정 역", c: "1-3"}, {l: "1-4", n: "쿠키 꾸미기 역", c: "하이진"},
        {l: "1-5", n: "매표소", c: "학생회"}, {l: "1-6", n: "추억을 요리하는 역", c: "1-6"},
        {l: "1-7", n: "이슈클렌저 역", c: "시사톡톡"}, {l: "1-8", n: "여우 가면 제작 역", c: "만화공작소"},
        {l: "1-9", n: "타임잭팟 역", c: "1-9"}, {l: "1-10", n: "나 홀로 영화 역", c: "무비스타"},
        {l: "2-1", n: "현요미 다방 역", c: "2-1"}, {l: "2-2", n: "범인을 찾아주세역", c: "오투"},
        {l: "2-3", n: "확률과 나의 미래 역", c: "2-3"}, {l: "2-4", n: "입벌역", c: "2-4"},
        {l: "2-5", n: "어린시절 공작소 역", c: "온에어"}, {l: "2-6", n: "망각의 교실 역", c: "에듀피아"},
        {l: "2-7", n: "당신은 노비인가역", c: "2-7"}, {l: "2-8", n: "주막에서 쉬어가역", c: "2-8"},
        {l: "2-9", n: "미니게임 역", c: "코드긱스"}, {l: "2-10", n: "추억의 록담 역", c: "2-10"},
        {l: "화생실", n: "미래 음식 연구소역", c: "미생"}, {l: "물지실", n: "퀀텀 터미널 역", c: "아르케"},
        {l: "미술실", n: "노스텔지어 역", c: "붓놀림"}, {l: "특수반", n: "손끝 카페", c: "특수반"},
        {l: "시청각", n: "선배와의 희망 멘토링", c: "진로반"}, {l: "학력향상", n: "자음 가죽 키링 만들기", c: "한땀 한글"},
        {l: "자치실", n: "스타벅쌤", c: "연구부"}, {l: "복도", n: "학술제 결과물 전시", c: "학생부"}
    ];

    const grid = document.getElementById('boothGrid');
    grid.innerHTML = boothData.map(b => `
        <div class="booth-item">
            <div class="booth-num">${b.l}</div>
            <div class="booth-name">${b.n}</div>
            <div class="booth-club">${b.c}</div>
        </div>
    `).join('');
}

function renderPerformances() {
    const perfData = [
        {p: "1부", t: "밴드", n: "all i want for christmas is you", m: "3-2 박은서 외 5명"},
        {p: "1부", t: "댄스", n: "학교를 안 갔어! 외 2곡", m: "2-3 김다영 외 2명"},
        {p: "1부", t: "노래", n: "And July", m: "1-3 박수인 외 1명"},
        {p: "1부", t: "댄스", n: "키싱유 외 1곡", m: "1-10 박시현 외 4명"},
        {p: "1부", t: "랩", n: "수퍼비와 외 1곡", m: "2-8 김시우 외 2명"},
        {p: "1부", t: "댄스", n: "검정고무신 외 1곡", m: "1-2 이승희 외 9명"},
        {p: "1부", t: "노래", n: "rich man", m: "3-6 김현리 외 1명"},
        {p: "1부", t: "댄스", n: "Chains 외 1곡", m: "1-3 윤정서 외 1명"},
        {p: "1부", t: "댄스", n: "Yes or yes 외 3곡", m: "1-1"},
        {p: "1부", t: "특별", n: "애정표현 외 3곡", m: "남창고 밴드부"},
        {p: "2부", t: "밴드", n: "나에게로 떠나는 여행", m: "3-1 최윤서 외 5명"},
        {p: "2부", t: "노래", n: "lion sleeps tonight", m: "2-1 황이진 외 6명"},
        {p: "2부", t: "댄스", n: "on&on 외 2곡", m: "3-3 이채희"},
        {p: "2부", t: "노래", n: "사랑하게 될 거야", m: "1-4 김부경 외 1명"},
        {p: "2부", t: "댄스", n: "what is love 외 1곡", m: "2-4 정서영 외 8명"},
        {p: "2부", t: "댄스", n: "SPAGHETTI 외 2곡", m: "3-5 서효린 외 4명"},
        {p: "2부", t: "노래", n: "행운을 빌어 줘", m: "2-5 이시은"},
        {p: "2부", t: "댄스", n: "오늘만 I LOVE YOU 외 1곡", m: "3-7 박세영 외 4명"},
        {p: "2부", t: "밴드", n: "맨정신 외 3곡", m: "밴드부 UZ"},
        {p: "2부", t: "댄스", n: "rude boy 외 4곡", m: "댄스부 EMPRESS"}
    ];

    const list = document.getElementById('performanceList');
    list.innerHTML = perfData.map(p => `
        <div class="perf-item">
            <b>${p.p} ${p.t}</b> - ${p.n}
            <div class="perf-team">${p.m}</div>
        </div>
    `).join('');
}
