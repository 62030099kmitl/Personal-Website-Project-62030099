// ดักจับเหตุการณ์ด้วยการกดปุ่ม
document.addEventListener("keydown", keyboardInputHandler);

// ฟังก์ชันเมื่อมีการกดปุ่ม
function keyboardInputHandler(e) {
  // ดักจับค่าที่ส่งมาด้วยฟังก์ชัน liveScreen
  let res = document.getElementById("result");

  // ตัวเลข
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  // ตัวดำเนินการ
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  // จุด
  if (e.key === ".") {
    res.value += ".";
  }

  // เมื่อกดปุ่ม Enter จะแสดงผลลัพธ์
  if (e.key === "Enter") {
    res.value = eval(result.value || null);
  }

  // เมื่อกดปุ่ม backspace จะลบข้อมูลล่าสุด
  if (e.key === "Backspace") {
    let resultInput = res.value;

    // ลบ element ที่อยู่ในข้อความ
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

// ฟังก์ชันล้างช่องแสดงตัวเลข
function clearScreen() {
  document.getElementById("result").value = "";
}

// Displays entered value on screen.
// ฟังก์ชันแสดงค่าตัวเลข
function liveScreen(value) {
  let res = document.getElementById("result");
  if (!res.value) {
    res.value = "";
  }
  res.value += value;
}