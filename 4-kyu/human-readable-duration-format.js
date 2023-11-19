function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }

    const timeUnits = {
        year: 365 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1,
    };

    const result = [];

    for (const [unit, duration] of Object.entries(timeUnits)) {
        const count = Math.floor(seconds / duration);
        if (count > 0) {
            result.push(`${count} ${unit}${count > 1 ? 's' : ''}`);
            seconds %= duration;
        }
    }

    return result.length > 1
        ? result.slice(0, -1).join(', ') + ' and ' + result.slice(-1)
        : result[0];
}


console.log(formatDuration(62));    // "1 minute and 2 seconds"
console.log(formatDuration(3662));  // "1 hour, 1 minute and 2 seconds"

