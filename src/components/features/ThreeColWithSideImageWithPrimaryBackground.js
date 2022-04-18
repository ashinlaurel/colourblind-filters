import { React, useContext } from "react";
import { ColourContext } from "context/colourContext";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = null,
  heading = "Facts About Colour Blindness",
  subheading = "",
  description = "Following are some interesting facts about colour blindness",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Total Number",
      description:
        "It’s estimated that there are 300 million color blind people in the world!",
    },
    {
      imageSrc: SupportIconImage,
      title: "How Common",
      description:
        " Color blindness is more common than you might think! 1 in 12 men is color blind while only 1 in 200 women have the condition.",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Chromosome",
      description:
        "Red-green color blindness is passed down through the mother on the X-chromosome.",
    },
    {
      imageSrc: ReliableIconImage,
      title: "Red Green Colour Blindness",
      description:
        "Red-green color blindness is common name for the two most common types called Deutan and Protan. It is given this name since red and green are the two colors that are typically most difficult to distinguish by color blind individuals with either of these conditions.",
    },
    {
      imageSrc: FastIconImage,
      title: "Cause",
      description:
        " Red-green color blindness is caused by a defect in a person’s light-sensitive cone cells. The green-sensing M cone and the red-sensing L cone’s sensitivities overlap more than they would in a normally-sighted person’s eyes, which creates color confusion across the spectrum.",
    },
    {
      imageSrc: SimpleIconImage,
      title: "Babies And Colour Blindness",
      description:
        " Babies are born color blind! As they grow, their color vision improves and is typically fully developed by the age of 6 months.",
    },
  ];

  if (!cards) cards = defaultCards;

  const { colourmode, setColourMode } = useContext(ColourContext);

  return (
    <Container
      css={[
        tw`-mx-8 px-8 text-gray-100`,
        colourmode == "Normal" && tw`bg-thenormal-400`,
        colourmode == "prot" && tw`bg-prot-100`,
        colourmode == "duet" && tw`bg-duet-100`,
        colourmode == "trit" && tw`bg-trit-100`,
      ]}
    >
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading
          css={[
            colourmode == "Normal" && tw`text-duet-400`,
            colourmode == "prot" && tw`text-prot-400`,
            colourmode == "duet" && tw`text-duet-400`,
            colourmode == "trit" && tw`text-trit-400`,
          ]}
        >
          {heading}
        </Heading>
        {description && (
          <Description
            css={[
              colourmode == "Normal" && tw`text-duet-400`,
              colourmode == "prot" && tw`text-prot-400`,
              colourmode == "duet" && tw`text-duet-400`,
              colourmode == "trit" && tw`text-trit-400`,
            ]}
          >
            {description}
          </Description>
        )}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span
                  css={[
                    colourmode == "Normal" && tw`text-duet-400`,
                    colourmode == "prot" && tw`text-prot-400`,
                    colourmode == "duet" && tw`text-duet-400`,
                    colourmode == "trit" && tw`text-trit-400`,
                  ]}
                  className="title"
                >
                  {card.title || "Fully Secure"}
                </span>
                <p
                  css={[
                    colourmode == "Normal" && tw`text-duet-400`,
                    colourmode == "prot" && tw`text-prot-400`,
                    colourmode == "duet" && tw`text-duet-400`,
                    colourmode == "trit" && tw`text-trit-400`,
                  ]}
                  className="description"
                >
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
