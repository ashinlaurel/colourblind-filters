import { React, useContext } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ColourContext } from "context/colourContext";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl as ContentBase,
} from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "images/checkbox-circle.svg";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 px-8`;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-gray-300 text-center`;

const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;
const Plan = styled.div`
  ${tw`w-full max-w-sm bg-white rounded-lg shadow-sm py-10 px-6 sm:px-10 lg:px-6 lg:py-10 xl:p-10 mx-3 flex flex-col justify-between mt-16 first:mt-0 lg:mt-0 shadow-raised`}
`;

const PlanHeader = styled.div`
  .nameAndFeaturedContainer {
    ${tw`flex flex-wrap flex-col sm:flex-row justify-between items-center`}
  }
  .name {
    ${tw`lg:text-lg xl:text-xl font-bold uppercase tracking-wider mr-3`}
  }
  .featuredText {
    ${tw`text-xs font-bold px-3 rounded py-2 uppercase bg-green-300 text-green-900 leading-none mt-4 sm:mt-0 w-full sm:w-auto text-center`}
  }
  .pricingContainer {
    ${tw`mt-6 flex items-end justify-between`}
    .currentPrice {
      ${tw`text-lg font-bold leading-none`}
      .bigText {
        ${tw`text-3xl font-bold`}
      }
    }
    .oldPrice {
      ${tw`text-gray-500 text-lg line-through hidden sm:block`}
    }
  }
  .description {
    ${tw`mt-8 font-medium text-gray-700 lg:text-sm xl:text-base`}
  }
`;
const PlanFeatures = styled.ul`
  ${tw`mt-10 flex-1 border-t lg:-mx-6 -mx-6 sm:-mx-10 py-10 px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0`}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-primary-900 tracking-wide ml-3`}
    }
  }
`;

const PlanAction = tw.div`mt-4`;
const ActionButton = styled(PrimaryButtonBase)`
  ${tw`block text-center text-sm font-semibold tracking-wider w-full text-gray-100 bg-primary-500 px-6 py-4 rounded hover:bg-primary-700 focus:shadow-outline focus:outline-none transition-colors duration-300`}
`;

const WhiteBackgroundOverlay = tw.div`absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 bg-white z-0`;

export default ({
  subheading = "",
  heading = "Types Of Colour Blindness",
  description = "Humans sense lights with the help of three types of cones present in our eyes. Different combination of problems can give rise to different forms of colour blindness. The following three types are the most common among them.",
  plans = null,
  primaryButtonText = "Create Server",
}) => {
  const defaultPlans = [
    {
      // name: "Personal",
      price: ["Protanopia", ""],
      oldPrice: "",
      description: "Caused due to Missing/malfunctioning L-cone (red).",
      features: [
        "Male : 1.01%",
        "Female : 0.02%",
        "Difficulty to distinguish between blue and green colors",
        "Difficulty to distinguish between red and green colors",
      ],
      url: "https://google.com",
    },
    {
      name: "",
      price: ["Dueteranomaly", ""],
      oldPrice: "",
      description: "Caused due to Missing/malfunctioning M-cone (green).",
      features: [
        "Male : 5.00%",
        "Female : 0.35%",
        "Difficulty to distinguish between red and green colors",
      ],
      url: "https://google.com",
      // featured: "Most Popular",
    },
    {
      name: "",
      price: ["Tritanomaly", ""],
      oldPrice: "",
      description: "Caused due to Missing/malfunctioning S-cone (red).",
      features: [
        "Very Rare",
        "Equally found in men and women",
        "Difficulty to distinguish between blue and yellow colors",
      ],
      url: "https://google.com",
    },
  ];

  if (!plans) plans = defaultPlans;
  const { colourmode, setColourMode } = useContext(ColourContext);

  return (
    <Container
      css={[
        colourmode == "Normal" && tw`bg-thenormal-400`,
        colourmode == "prot" && tw`bg-prot-100`,
        colourmode == "duet" && tw`bg-duet-100`,
        colourmode == "trit" && tw`bg-trit-100`,
      ]}
    >
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && (
            <Subheading
              css={[
                colourmode == "Normal" && tw`text-duet-400`,
                colourmode == "prot" && tw`text-prot-400`,
                colourmode == "duet" && tw`text-duet-400`,
                colourmode == "trit" && tw`text-trit-400`,
              ]}
            >
              {subheading}
            </Subheading>
          )}
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
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan
              css={[
                colourmode == "Normal" && tw`text-duet-400`,
                colourmode == "prot" && tw`text-prot-400`,
                colourmode == "duet" && tw`text-duet-400`,
                colourmode == "trit" && tw`text-trit-400`,
              ]}
              key={index}
              featured={plan.featured}
            >
              <PlanHeader>
                <span className="nameAndFeaturedContainer">
                  <span className="name">{plan.name}</span>
                  {plan.featured && (
                    <span className="featuredText">{plan.featured}</span>
                  )}
                </span>
                <div className="pricingContainer">
                  <span className="currentPrice">
                    <span className="bigText">{plan.price[0]}</span>
                    {plan.price[1]}{" "}
                  </span>
                  {plan.oldPrice && (
                    <span className="oldPrice">{plan.oldPrice}</span>
                  )}
                </div>
                <p className="description">{plan.description}</p>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <li className="feature" key={index}>
                    <CheckboxIcon className="icon" />
                    <span className="text">{feature}</span>
                  </li>
                ))}
              </PlanFeatures>
              {/* <PlanAction>
                <ActionButton as="a" href={plan.url}>
                  {primaryButtonText}
                </ActionButton>
              </PlanAction> */}
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
      <WhiteBackgroundOverlay />
    </Container>
  );
};
