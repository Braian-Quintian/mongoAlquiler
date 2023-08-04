import rateLimit from 'express-rate-limit';

export let limitGet = () => {
    return rateLimit({
        windowMs: 30 * 1000, // 30 seconds
        max: 25, // 25 requests,
        standardHeaders: true, // Return rate limit info in the RateLimit- headers
        legacyHeaders: false, // Disable the 'X-RateLimit' legacy header
        skip: (req, res) => req.headers["content-length"] > 91
        ? res.status(413).json({ status: 413, message: "Content too large" })
        : false,
        message: { status: 429, message: 'Too many requests from this IP, please try again after 15 minutes' },
    });
};