import React from 'react';
import { FooterStyles } from '../styles/FooterStyles';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <ParagraphText className="copyright">
          &copy; 2023 | Designed & Coded by Yuri Kim 👩🏻‍💻
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
