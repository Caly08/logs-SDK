const AnalyticsSDK = (function () {
    let initialized = false;
    let userId = null;

    function init(uid) {
        if (!uid) throw new Error("User ID required to init SDK");
        userId = uid;
        initialized = true;
        logEvent("sdk_init", { userId });
    }

    function logEvent(eventName, data = {}) {
        if (!initialized) {
            console.warn("SDK not initialized");
            return;
        }

        const payload = {
            eventName,
            timestamp: new Date().toISOString(),
            userId,
            ...data,
        };

        console.log("[AnalyticsSDK] Event Logged:", payload);
        // You could later expand this to send data to a backend.
    }

    return {
        init,
        logEvent,
    };
})();
