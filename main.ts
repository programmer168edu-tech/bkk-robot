namespace BKK_ROBOT {

    /**
     * ส่งคำสั่งไปยัง Robot
     */
    function sendCommand(command: string): void {
        bluetooth.uartWriteString(command)
    }

    /**
     * เริ่มต้น Bluetooth UART
     * ต้องเรียกหนึ่งครั้งเมื่อเริ่มโปรแกรม
     */
    //% block="เริ่มต้น Bluetooth Robot"
    //% weight=100
    //% group="เริ่มต้น"
    export function start(): void {
        bluetooth.startUartService()
    }

    // =====================================================
    // ควบคุมแขน
    // =====================================================

    /**
     * ยกสองมือขึ้น
     */
    //% block="ยกสองมือขึ้น"
    //% weight=100
    //% group="ควบคุมแขน"
    export function handsUp(): void {
        sendCommand("H_UP")
    }

    /**
     * เอาสองมือไปด้านหลัง
     */
    //% block="เอาสองมือไปด้านหลัง"
    //% weight=99
    //% group="ควบคุมแขน"
    export function handsBack(): void {
        sendCommand("H_BACK")
    }

    /**
     * เอาสองมือลงมาแนบตัว
     */
    //% block="เอาสองมือลงมาแนบตัว"
    //% weight=98
    //% group="ควบคุมแขน"
    export function handsDown(): void {
        sendCommand("H_DOWN")
    }

    /**
     * แกว่งแขนไปมา
     */
    //% block="แกว่งแขนไปมา"
    //% weight=97
    //% group="ควบคุมแขน"
    export function handsMove(): void {
        sendCommand("H_MOVE")
    }

    /**
     * ยกมือซ้ายขึ้น
     */
    //% block="ยกมือซ้ายขึ้น"
    //% weight=96
    //% group="ควบคุมแขน"
    export function leftHandUp(): void {
        sendCommand("H_LEFTUP")
    }

    /**
     * เอามือซ้ายไปด้านหลัง
     */
    //% block="เอามือซ้ายไปด้านหลัง"
    //% weight=95
    //% group="ควบคุมแขน"
    export function leftHandBack(): void {
        sendCommand("H_LEFTBACK")
    }

    /**
     * เอามือซ้ายลงมาแนบตัว
     */
    //% block="เอามือซ้ายลงมาแนบตัว"
    //% weight=94
    //% group="ควบคุมแขน"
    export function leftHandDown(): void {
        sendCommand("H_LEFTDOWN")
    }

    /**
     * ยกมือขวาขึ้น
     */
    //% block="ยกมือขวาขึ้น"
    //% weight=93
    //% group="ควบคุมแขน"
    export function rightHandUp(): void {
        sendCommand("H_RIGHTUP")
    }

    /**
     * เอามือขวาไปด้านหลัง
     */
    //% block="เอามือขวาไปด้านหลัง"
    //% weight=92
    //% group="ควบคุมแขน"
    export function rightHandBack(): void {
        sendCommand("H_RIGHTBACK")
    }

    /**
     * เอามือขวาลงมาแนบตัว
     */
    //% block="เอามือขวาลงมาแนบตัว"
    //% weight=91
    //% group="ควบคุมแขน"
    export function rightHandDown(): void {
        sendCommand("H_RIGHTDOWN")
    }

    // =====================================================
    // สีไฟ
    // =====================================================

    /**
     * เปลี่ยนสีเป็นสีแดง
     */
    //% block="เปลี่ยนไฟเป็นสีแดง"
    //% weight=80
    //% group="สีไฟ"
    export function colorRed(): void {
        sendCommand("C_RED")
    }

    /**
     * เปลี่ยนสีเป็นสีเขียว
     */
    //% block="เปลี่ยนไฟเป็นสีเขียว"
    //% weight=79
    //% group="สีไฟ"
    export function colorGreen(): void {
        sendCommand("C_GREEN")
    }

    /**
     * เปลี่ยนสีเป็นสีน้ำเงิน
     */
    //% block="เปลี่ยนไฟเป็นสีน้ำเงิน"
    //% weight=78
    //% group="สีไฟ"
    export function colorBlue(): void {
        sendCommand("C_B")
    }

    /**
     * วนสี แดง เขียว น้ำเงิน
     */
    //% block="วนไฟสีแดง เขียว น้ำเงิน"
    //% weight=77
    //% group="สีไฟ"
    export function colorRGB(): void {
        sendCommand("C_RGB")
    }

    /**
     * หยุดและนำแขนกลับมาแนบตัว
     */
    //% block="Reset แขนและสีของหุ่น"
    //% weight=66
    //% group="การเคลื่อนที่"
    export function resetColorAndHand(): void {
        sendCommand("RESET")
    }

    // =====================================================
    // การเคลื่อนที่
    // =====================================================

    /**
     * เดินหน้า
     */
    //% block="เดินหน้า"
    //% weight=70
    //% group="การเคลื่อนที่"
    export function forward(): void {
        sendCommand("GO")
    }

    /**
     * หันซ้าย
     */
    //% block="หันซ้าย"
    //% weight=69
    //% group="การเคลื่อนที่"
    export function turnLeft(): void {
        sendCommand("TURN_L")
    }

    /**
     * หันขวา
     */
    //% block="หันขวา"
    //% weight=68
    //% group="การเคลื่อนที่"
    export function turnRight(): void {
        sendCommand("TURN_R")
    }

    /**
     * หยุดเคลื่อนไหว
     */
    //% block="หยุดเคลื่อนไหว"
    //% weight=67
    //% group="การเคลื่อนที่"
    export function stopMove(): void {
        sendCommand("STOP_MOVE")
    }

    /**
     * เดินหน้าตามเวลาที่กำหนด แล้วหยุด
     */
    //% block="เดินหน้า $seconds วินาที แล้วหยุด"
    //% seconds.min=0
    //% seconds.max=60
    //% seconds.defl=1
    //% weight=66
    //% group="การเคลื่อนที่"
    export function forwardSeconds(seconds: number): void {
        sendCommand("GO")
        basic.pause(seconds * 1000)
        sendCommand("STOP_MOVE")
    }

    /**
     * หันซ้ายตามเวลาที่กำหนด แล้วหยุด
     */
    //% block="หันซ้าย $seconds วินาที แล้วหยุด"
    //% seconds.min=0
    //% seconds.max=60
    //% seconds.defl=1
    //% weight=65
    //% group="การเคลื่อนที่"
    export function turnLeftSeconds(seconds: number): void {
        sendCommand("TURN_L")
        basic.pause(seconds * 1000)
        sendCommand("STOP_MOVE")
    }

    /**
     * หันขวาตามเวลาที่กำหนด แล้วหยุด
     */
    //% block="หันขวา $seconds วินาที แล้วหยุด"
    //% seconds.min=0
    //% seconds.max=60
    //% seconds.defl=1
    //% weight=64
    //% group="การเคลื่อนที่"
    export function turnRightSeconds(seconds: number): void {
        sendCommand("TURN_R")
        basic.pause(seconds * 1000)
        sendCommand("STOP_MOVE")
    }


    // =====================================================
    // ใบหน้า
    // =====================================================

    /**
     * แสดงหน้ากริ้ว
     */
    //% block="แสดงหน้ากริ้ว"
    //% weight=60
    //% group="ใบหน้า"
    export function faceAngry(): void {
        sendCommand("F_ANGRY")
    }

    /**
     * แสดงหน้าดีใจ
     */
    //% block="แสดงหน้าดีใจ"
    //% weight=59
    //% group="ใบหน้า"
    export function faceHappy(): void {
        sendCommand("F_HAPPY")
    }

    /**
     * แสดงหน้าหลับ
     */
    //% block="แสดงหน้าหลับ"
    //% weight=58
    //% group="ใบหน้า"
    export function faceSleep(): void {
        sendCommand("F_SLEEP")
    }

    /**
     * แสดงหน้างง
     */
    //% block="แสดงหน้างง"
    //% weight=57
    //% group="ใบหน้า"
    export function faceConfuse(): void {
        sendCommand("F_CONFUSE")
    }

    /**
     * แสดงหน้าถ่ายรูป
     */
    //% block="แสดงหน้าถ่ายรูป"
    //% weight=56
    //% group="ใบหน้า"
    export function facePhoto(): void {
        sendCommand("F_PHOTO")
    }

    /**
     * แสดงหน้าหวาดกลัว
     */
    //% block="แสดงหน้าหวาดกลัว"
    //% weight=55
    //% group="ใบหน้า"
    export function facePank(): void {
        sendCommand("F_PANK")
    }

    /**
     * แสดงหน้าครุ่นคิด
     */
    //% block="แสดงหน้าครุ่นคิด"
    //% weight=54
    //% group="ใบหน้า"
    export function faceThinking(): void {
        sendCommand("F_THINKING")
    }

    // =====================================================
    // เสียง
    // =====================================================

    /**
     * เล่นไฟล์เสียงตามชื่อไฟล์
     * ตัวอย่างชื่อไฟล์ hello
     */
    //% block="เล่นไฟล์เสียงชื่อ $fileName"
    //% fileName.shadow="text"
    //% fileName.defl="hello"
    //% weight=50
    //% group="เสียง"
    export function playSoundFile(fileName: string): void {
        sendCommand("P_" + fileName)
    }

    // =====================================================
    // คำสั่งกำหนดเอง
    // =====================================================

    /**
     * ส่งคำสั่งข้อความแบบกำหนดเอง
     */
    //% block="ส่งคำสั่ง Robot $command"
    //% command.shadow="text"
    //% command.defl="GO"
    //% weight=10
    //% advanced=true
    //% group="ขั้นสูง"
    export function customCommand(command: string): void {
        sendCommand(command)
    }
}
