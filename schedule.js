let scheduleArr = [];

// 페이지 로딩 시 로컬스토리지에서 불러오기
window.onload = function () {
    loadSchedule();
    showSchedule();
};

// 스케줄 등록
function insertSchedule() {
    const scheduleName = document.querySelector("#schedule-name").value.trim();
    const scheduleDate = document.querySelector("#schedule-date").value;

    if (!scheduleName || !scheduleDate) {
        alert("스케줄 이름과 날짜를 모두 입력해주세요.");
        return;
    }

    const schedule = {
        id: Date.now(), // 고유 식별자
        name: scheduleName,
        date: scheduleDate
    };

    scheduleArr.push(schedule);
    saveSchedule();
    showSchedule();

    document.querySelector("#schedule-name").value = "";
    document.querySelector("#schedule-date").value = "";
}

// 저장
function saveSchedule() {
    localStorage.setItem("schedules", JSON.stringify(scheduleArr));
    alert("스케줄이 저장되었습니다.");
}

// 불러오기
function loadSchedule() {
    const data = localStorage.getItem("schedules");
    if (data) {
        scheduleArr = JSON.parse(data);
    }
}

// 조회
function showSchedule() {
    const tbody = document.querySelector("#schedule-tbody");
    tbody.innerHTML = "";

    if (scheduleArr.length === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td colspan="2">등록된 스케줄이 없습니다.</td>`;
        tbody.appendChild(tr);
        return;
    }

    for (let schedule of scheduleArr) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = schedule.name;

        const tdDate = document.createElement("td");
        tdDate.textContent = schedule.date;

        tr.appendChild(tdName);
        tr.appendChild(tdDate);

        tbody.appendChild(tr);
    }
}

const calendar = document.getElementById('calendar');
const calendarInfo = document.getElementById('calendar-info');

function generateCalendar(year, month) {
    const date = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = date.getDay();

    let html = '<table border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; width: 100%;">';
    html += '<tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>';

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                html += '<td></td>';
            } else if(dayCount <= daysInMonth) {
                html += `<td class="day-cell" data-day="${dayCount}">${dayCount}</td>`;
                dayCount++;
            } else {
                html += '<td></td>';
            }
        }
        html += '</tr>';
        if(dayCount > daysInMonth) break;
    }
    html += '</table>';
    calendar.innerHTML = html;
    attachDayClickEvent(year, month);
}

