class Utils {
    public static degrees(value) {
        if(value === 359) {
            return 0;
        }

        return ++value;
    }
    public static randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public static currentYear = () => new Date().getFullYear();
}

export default Utils;