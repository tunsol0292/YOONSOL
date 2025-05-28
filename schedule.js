let scheduleArr = [];

// 스케줄 등록
function insertSchedule() {
    const scheduleName = document.querySelector("#schedule-name").value;
    const scheduleDate = document.querySelector("#schedule-date").value;

    // 새로운 스케줄 객체 생성
    const schedule = {
        name: scheduleName,
        date: scheduleDate
    };

    // 스케줄 배열에 추가
    scheduleArr.push(schedule);

    console.log("스케줄 등록됨:", schedule);

    // 입력값 초기화
    document.querySelector("#schedule-name").value = "";
    document.querySelector("#schedule-date").value = "";
}

// 스케줄 저장
function saveSchedule() {
    // 로컬스토리지에 저장
    const jsonStr = JSON.stringify(scheduleArr); 

    localStorage.setItem("schedules", jsonStr);
    console.log("스케줄 목록 저장됨:", scheduleArr);
}

// 스케줄 목록 조회
function showSchedule() {
    const storedSchedules = localStorage.getItem("schedules");

    const scheduleListDiv = document.querySelector("#schedule-list");
    scheduleListDiv.innerHTML = "<h3>등록된 스케줄 목록</h3>";

    if (storedSchedules) {
        const arr = JSON.parse(storedSchedules); 
        
        // 각 스케줄을 화면에 추가
        for (let schedule of arr) {
            const h3Tag = document.createElement("h3");
            h3Tag.innerText = schedule.name + " - " + schedule.date;
            
            scheduleListDiv.appendChild(h3Tag);
        }
    } else {
        scheduleListDiv.innerHTML += "<p>저장된 스케줄이 없습니다.</p>";
    }
}
