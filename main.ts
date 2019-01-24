//% color="#C814B8" weight=25 icon="\uf1d4"
namespace lilibit_测距 {

    export function Ultrasonic_Car(): number {

        // send pulse
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P14, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P14, 1);
        control.waitMicros(15);
        pins.digitalWritePin(DigitalPin.P14, 0);

        // read pulse
        let d = pins.pulseIn(DigitalPin.P15, PulseValue.High, 43200);
        return Math.floor(d / 58);
    }
} 