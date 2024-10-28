const logLevel = {
  INFO: "info",
  ERROR: "error",
  WARN: "warn",
};

const logger = {
  info: (message, data = {}) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(message, data);
    }

    // Send to backend API
    sendLogToServer({
      level: logLevel.INFO,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  },

  error: (message, error = {}, data = {}) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(message, error, data);
    }

    sendLogToServer({
      level: logLevel.ERROR,
      message,
      error: error.message || error,
      stack: error.stack,
      data,
      timestamp: new Date().toISOString(),
    });
  },

  warn: (message, data = {}) => {
    if (process.env.NODE_ENV !== "production") {
      console.warn(message, data);
    }

    sendLogToServer({
      level: logLevel.WARN,
      message,
      data,
      timestamp: new Date().toISOString(),
    });
  },
};

const sendLogToServer = async (logData) => {
  try {
    await fetch("/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    });
  } catch (error) {
    console.error("Failed to send log to server:", error);
  }
};

export default logger;
