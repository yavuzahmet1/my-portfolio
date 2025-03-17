"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';

const Privacy = () => {
    return (
        <div id='privacy' className='w-full px-[12%] scroll-mt-20 my-20 text-center'>
            <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'left' }}>
                <Typography variant="h4" gutterBottom>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" paragraph>
                    This privacy policy explains how https://my-world-omega-one.vercel.app/ collects, uses, and protects the personal data of our website visitors.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    1. Data We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                    Through our contact form, we collect the following information:
                    - **Name**: To address you personally in our responses.
                    - **Email Address**: To reply to your messages.
                    - **Message**: The content of your inquiry or feedback.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    2. How We Use Your Data
                </Typography>
                <Typography variant="body1" paragraph>
                    The data we collect is used solely for the following purposes:
                    - To respond to your inquiries and communicate with you.
                    - To improve our website and user experience.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    3. Data Sharing
                </Typography>
                <Typography variant="body1" paragraph>
                    We do not share, sell, or rent your personal data to any third parties. Your data is used exclusively for communication purposes.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    4. Data Retention
                </Typography>
                <Typography variant="body1" paragraph>
                    Your data is retained only for as long as necessary to fulfill the purpose of communication. Once the communication process is complete, your data is deleted.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    5. Cookies
                </Typography>
                <Typography variant="body1" paragraph>
                    Our website may use cookies to enhance your browsing experience. Cookies do not collect personal data and are stored only in your browser. You can disable cookies through your browser settings.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    6. Your Rights
                </Typography>
                <Typography variant="body1" paragraph>
                    You have the right to:
                    - Access, correct, or delete your personal data.
                    - Withdraw consent for data processing at any time.
                    To exercise these rights, please contact us at 1yavuzahmet@gmail.com.
                </Typography>

                <Typography variant="h6" gutterBottom>
                    7. Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                    If you have any questions about this privacy policy, please contact us at [your email address].
                </Typography>

                <Typography variant="body2" color="textSecondary" paragraph>
                    Last Updated: March 17, 2025
                </Typography>
            </Box>
        </div>
    );
};

export default Privacy;