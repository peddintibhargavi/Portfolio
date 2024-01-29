import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;




function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Bhargavi Peddinti</Logo>
        <p><b>Contact : </b>bhargavipeddinti1404@gmail.com</p>
      <p>Reference from Rishav Chanda</p>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;