namespace BKK_ROBOT {

    /**
     * ส่งคำสั่งไปยัง Robot
     */
    function sendCommand(command: string): void {
        bluetooth.uartWriteString(command + "\n")
    }

    /**
     * เริ่มต้น Bluetooth
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
    //% group="ควบคุมแขน"
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
     * แสดงหน้าโกรธ
     */
    //% block="แสดงหน้าโกรธ"
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
     * แสดงหน้าหยอกล้อ
     */
    //% block="แสดงหน้าหยอกล้อ"
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

    /**
    * หยุดเสียงไฟล์ที่เล่นปัจจุบัน
    */
    //% block="หยุดเสียงไฟล์ที่เล่นปัจจุบัน"
    //% weight=48
    //% group="เสียง"
    export function stopAudio_play(): void {
        sendCommand("Audio_stop")
    }


    export function thaiTextToUtf8Hex(text: string): string {
        let result = ""

        for (let i = 0; i < text.length; i++) {
            let code = text.charCodeAt(i)

            if (code <= 0x7f) {
                result += byteToHex(code)
            } else if (code <= 0x7ff) {
                result += byteToHex(
                    0xc0 | (code >> 6)
                )
                result += byteToHex(
                    0x80 | (code & 0x3f)
                )
            } else {
                result += byteToHex(
                    0xe0 | (code >> 12)
                )
                result += byteToHex(
                    0x80 | ((code >> 6) & 0x3f)
                )
                result += byteToHex(
                    0x80 | (code & 0x3f)
                )
            }
        }

        return result
    }

    /**
     * แปลงข้อความเป็น UTF-8 HEX แล้วแสดงใน Console
     * ใช้ใน Simulator ของ MakeCode เท่านั้น
     */
    //% block="แปลงและแสดง HEX ของข้อความ $text"
    //% text.shadow="text"
    //% text.defl="สวัสดี เป็นอย่างไรบ้าง"
    //% weight=51
    //% group="เสียง"
    export function printThaiUtf8Hex(text: string): void {
        const hex = thaiTextToUtf8Hex(text)

        console.log("ข้อความต้นฉบับ: " + text)
        console.log("UTF-8 HEX: " + hex)
    }

    /**
     * ส่งข้อความจาก UTF-8 HEX ไปให้ Python
     */
    //% block="พูดข้อความ $utf8Hex"
    //% utf8Hex.shadow="text"
    //% utf8Hex.defl="e0b8aae0b8a7e0b8b1e0b8aae0b894e0b8b5"
    //% weight=50
    //% group="เสียง"
    export function speakFromUtf8Hex(utf8Hex: string): void {
        bluetooth.uartWriteString(
            "THHEX:" + utf8Hex + "\n"
        )
    }

    function byteToHex(value: number): string {
        const hexChars = "0123456789abcdef"
        const byteValue = value & 0xff

        return (
            hexChars.charAt((byteValue >> 4) & 0x0f) +
            hexChars.charAt(byteValue & 0x0f)
        )
    }

    /**
    * หยุดเสียง Text-to-Speech
    */
    //% block="หยุดพูดข้อความ"
    //% weight=48
    //% group="เสียง"
    export function stopSpeaking(): void {
        sendCommand("TTS_stop")
    }

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
