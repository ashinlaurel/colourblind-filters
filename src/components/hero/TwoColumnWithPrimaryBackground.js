import { React, useContext } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ColourContext } from "context/colourContext";
import HeaderBase, {
  LogoLink as LogoLinkBase,
  NavLinks,
  NavLink as NavLinkBase,
  PrimaryLink as PrimaryLinkBase,
} from "../headers/light.js";
import {
  Container as ContainerBase,
  ContentWithVerticalPadding,
  Content2Xl,
} from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import logoImageSrc from "images/logo-light.svg";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";

// const PrimaryBackgroundContainer = tw.div`-mx-8 px-8 bg-primary-900 text-gray-100`;
const Header = tw(HeaderBase)`max-w-none -mt-8 py-8 -mx-8 px-8`;
const NavLink = tw(
  NavLinkBase
)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`;
const LogoLink = tw(LogoLinkBase)`text-gray-100 hocus:text-gray-300`;
const PrimaryLink = tw(
  PrimaryLinkBase
)`shadow-raised lg:bg-primary-400 lg:hocus:bg-primary-500`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-col lg:flex-row`;
const Column = tw.div`lg:w-1/2`;
const TextColumn = tw.div`text-center lg:text-left`;
const IllustrationColumn = tw(Column)`mt-16 lg:mt-0 lg:ml-16`;
const Heading = tw(
  SectionHeading
)`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`;
const Description = tw(
  SectionDescription
)`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 bg-primary-400 inline-block hocus:bg-primary-500`;
const Image = tw.img`w-144 ml-auto`;

export default ({
  heading = "Colour Blindness Filters For Web Platforms",
  description = "Color blindness is the decreased ability to see color or differences in color. It can impair tasks such as selecting ripe fruit, choosing clothing, and reading traffic lights. This website has multiple colour profiles to change the website design according to the user's choice. Choose one of the following colour-blind profiles :",
  primaryButtonText = "Colour Blind Mode",
  primaryButtonUrl = "#",
  imageSrc = serverIllustrationImageSrc,
}) => {
  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
      Human Computer Interaction
    </LogoLink>
  );

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Features</NavLink>
      <NavLink href="#">Pricing</NavLink>
      <NavLink href="#">Login</NavLink>
      <PrimaryLink href="#">Signup</PrimaryLink>
    </NavLinks>,
  ];

  const { colourmode, setColourMode } = useContext(ColourContext);

  // console.log(colourmode);
  return (
    <div
      css={[
        tw`-mx-8 px-8 text-gray-100`,
        colourmode == "Normal" && tw`bg-thenormal-400`,
        colourmode == "prot" && tw`bg-prot-100`,
        colourmode == "duet" && tw`bg-duet-100`,
        colourmode == "trit" && tw`bg-trit-100`,
      ]}
    >
      <Content2Xl>
        <Header logoLink={logoLink} links={navLinks} />
        <Container>
          <ContentWithVerticalPadding>
            <Row>
              <TextColumn>
                <Heading
                  css={[
                    tw`max-w-3xl lg:max-w-4xl lg:text-left leading-tight`,
                    colourmode == "Normal" && tw`text-duet-400`,
                    colourmode == "prot" && tw`text-prot-400`,
                    colourmode == "duet" && tw`text-duet-400`,
                    colourmode == "trit" && tw`text-trit-400`,
                  ]}
                >
                  {heading}
                </Heading>
                <Description
                  css={[
                    tw`mt-4 max-w-2xl text-gray-100 lg:text-base mx-auto lg:mx-0`,
                    colourmode == "Normal" && tw`text-duet-400`,
                    colourmode == "prot" && tw`text-prot-400`,
                    colourmode == "duet" && tw`text-duet-400`,
                    colourmode == "trit" && tw`text-trit-400`,
                  ]}
                >
                  {description}
                </Description>

                <div css={tw`relative inline-flex mt-4`}>
                  <svg
                    css={tw`w-2 h-2 text-black absolute top-0 right-0 m-4 pointer-events-none `}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 412 232"
                  >
                    <path
                      d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                      fill="#648299"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                      setColourMode(e.target.value);
                    }}
                    css={tw`border border-gray-300 rounded-full text-black h-10 pl-5 pr-8 bg-white bg-opacity-25
                     hover:border-gray-400 focus:outline-none appearance-none`}
                  >
                    <option value={"Normal"}>Pick a mode </option>
                    <option value={"Normal"}>Normal</option>
                    <option value={"prot"}>Protanopia</option>
                    <option value={"duet"}>Deuteranomaly</option>
                    <option value={"trit"}>Tritanomaly</option>
                  </select>
                </div>
              </TextColumn>
              <IllustrationColumn>
                <Image src={imageSrc} />
              </IllustrationColumn>
            </Row>
          </ContentWithVerticalPadding>
        </Container>
      </Content2Xl>
    </div>
  );
};
