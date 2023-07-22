import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <div className="footer mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <p className="text-center mb-none">@web development|software development</p>
                            
                                <ul className="text-center">
                                    <li><FacebookIcon/></li>
                                    <li><TwitterIcon /></li>
                                    <li><GoogleIcon /></li>
                                    <li><InstagramIcon /></li>
                                    <li><LinkedInIcon /></li>
                                    <li><GitHubIcon /></li>
                                </ul>
                            
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
