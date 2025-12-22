document.addEventListener('DOMContentLoaded', () => {
    renderBooths();
    renderPerformances();
});

function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
}

function renderBooths() {
    // [이미지 데이터 기반 공식 명칭 업데이트]
    const floor2 = [
        {l: "1-1", n: "양분식 역", d: "1학년 1반"},
        {l: "1-2", n: "미스터리 공포 역", d: "1학년 2반"},
        {l: "1-3", n: "요아정 역", d: "1학년 3반"},
        {l: "1-4", n: "쿠키 꾸미기 역", d: "하이진"},
        {l: "1-5", n: "매표소", d: "학생자치회"},
        {l: "1-6", n: "추억을 요리하는 역", d: "1학년 6반"},
        {l: "1-7", n: "이슈클렌저 역", d: "시사톡톡"},
        {l: "1-8", n: "여우 가면 제작 역", d: "만화공작소"},
        {l: "1-9", n: "타임잭팟 역", d: "1학년 9반"},
        {l: "1-10", n: "나 홀로 영화 역", d: "무비스타"}
    ];

    const floor3 = [
        {l: "2-1", n: "현요미 다방 역", d: "2학년 1반"},
        {l: "2-2", n: "범인을 찾아주세역", d: "오투(O2)"},
        {l: "2-3", n: "확률과 나의 미래 역", d: "2학년 3반"},
        {l: "2-4", n: "입벌역", d: "2학년 4반"},
        {l: "2-5", n: "어린시절 공작소 역", d: "온에어(ON-AIR)"},
        {l: "2-6", n: "망각의 교실 역", d: "에듀피아"},
        {l: "2-7", n: "당신은 노비인가역", d: "2학년 7반"},
        {l: "2-8", n: "주막에서 쉬어가역", d: "2학년 8반"},
        {l: "2-9", n: "미니게임 역", d: "코드긱스"},
        {l: "2-10", n: "추억의 록담 역", d: "2학년 10반"}
    ];

    const special = [
        {l: "화생실", n: "미래 음식 연구소 역", d: "미생"},
        {l: "물지실", n: "퀀텀 터미널 역", d: "아르케"},
        {l: "미술실", n: "노스텔지어 역", d: "붓놀림"},
        {l: "특수반", n: "손끝 카페", d: "특수학급"},
        {l: "진로활동실&시청각실", n: "선배와의 희망 멘토링", d: "진로반"},
        {l: "학력향상실", n: "자음 가죽 키링 만들기", d: "한땀 한글"},
        {l: "학생자치실", n: "스타벅쌤", d: "선생님 연구부"},
        {l: "시청각실 복도", n: "학술제 결과물 전시", d: "학생부"}
    ];

    const makeHTML = (item) => `
        <div class="booth-item">
            <div class="booth-num">${item.l}</div>
            <div class="booth-name">${item.n}</div>
            <div class="booth-desc">${item.d}</div>
        </div>
    `;

    document.getElementById('floor2Grid').innerHTML = floor2.map(makeHTML).join('');
    document.getElementById('floor3Grid').innerHTML = floor3.map(makeHTML).join('');
    document.getElementById('specialGrid').innerHTML = special.map(makeHTML).join('');
}

function renderPerformances() {
    // [무대 공연 전체 20팀 데이터]
    const perfData = [
        {p: "1부 밴드", n: "All I Want For Christmas Is You", m: "3-2 박은서 외 5명"},
        {p: "1부 댄스", n: "학교를 안 갔어! 외 2곡", m: "2-3 김다영 외 2명"},
        {p: "1부 노래", n: "And July", m: "1-3 박수인 외 1명"},
        {p: "1부 댄스", n: "키싱유 외 1곡", m: "1-10 박시현 외 4명"},
        {p: "1부 랩", n: "수퍼비와 외 1곡", m: "2-8 김시우 외 2명"},
        {p: "1부 댄스", n: "검정고무신 외 1곡", m: "1-2 이승희 외 9명"},
        {p: "1부 노래", n: "Rich Man", m: "3-6 김현리 외 1명"},
        {p: "1부 댄스", n: "Chains 외 1곡", m: "1-3 윤정서 외 1명"},
        {p: "1부 댄스", n: "Yes Or Yes 외 3곡", m: "1-1"},
        {p: "1부 특별", n: "애정표현 외 3곡", m: "남창고 찬조공연"},

        {p: "2부 밴드", n: "나에게로 떠나는 여행", m: "3-1 최윤서 외 5명"},
        {p: "2부 노래", n: "Lion Sleeps Tonight", m: "2-1 황이진 외 6명"},
        {p: "2부 댄스", n: "On&On 외 2곡", m: "3-3 이채희"},
        {p: "2부 노래", n: "사랑하게 될 거야", m: "1-4 김부경 외 1명"},
        {p: "2부 댄스", n: "What Is Love 외 1곡", m: "2-4 정서영 외 8명"},
        {p: "2부 댄스", n: "SPAGHETTI 외 2곡", m: "3-5 서효린 외 4명"},
        {p: "2부 노래", n: "행운을 빌어 줘", m: "2-5 이시은"},
        {p: "2부 댄스", n: "오늘만 I LOVE YOU 외 1곡", m: "3-7 박세영 외 4명"},
        {p: "2부 밴드", n: "맨정신 외 3곡", m: "밴드부 UZ"},
        {p: "2부 댄스", n: "Rude Boy 외 4곡", m: "댄스부 EMPRESS"}
    ];

    const list = document.getElementById('performanceList');
    list.innerHTML = perfData.map(p => `
        <div class="perf-item">
            <span class="perf-header">${p.p}</span>
            <span class="perf-title">${p.n}</span>
            <div class="perf-team">${p.m}</div>
        </div>
    `).join('');
}
