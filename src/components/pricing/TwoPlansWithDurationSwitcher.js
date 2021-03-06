import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;
const Plan = styled.div`
  ${tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-3xl sm:text-4xl my-1`}
  }
  .slash {
    ${tw`text-xl text-gray-500`}
  }
  .duration {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
  }
  .price-wrong {
    ${tw`font-bold my-1 text-gray-500`}
  }
  .slash-wrong {
    ${tw`text-xl text-gray-500`}
  }
  .duration-wrong {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
  }
  .priceAndDuration-wrong {
    ${tw`line-through`}
  }
  .mainFeature {
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-gray-500`}
  }
`;

const PlanAction = tw.div`px-4 pb-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
`;

export default ({
  subheading = "Harga",
  heading = " Harga Sesuai.",
  description = "Kami menyadari, pandemi ini membuat banyak orang ingin tetap terus belajar ditengah kekurangan, oleh karenanya kami memberikan harga yang pas.",
  plans = null,
  primaryButtonText = "Daftar Sekarang",
  planDurations = [
    {
      text: "Person",
    },
  ],
}) => {
  const defaultPlans = [
    {
      name: "Mentee Tier 0",
      durationPrices: ["Rp 75K"],
      durationPricesWrong: ["Rp 125K"],
      mainFeature: "Frontend Pemula",
      features: [
        "Mentorship melalui Chat Grup",
        "Feedback Code",
        "Slide Presentasi",
        "Video COurse 5-6 Jam",
        "Sumber Belajar",
        "Grup Bersama",
        "Free Konsultasi Selamanya",
        "Unlimited Person / Batch",
        "-",
        "-",
        "-",
      ],
      url: ["https://karyakarsa.com/naufaldisatriya/rewards"],
    },
    {
      name: "Mentee Tier 1",
      durationPrices: ["Rp 150K"],
      durationPricesWrong: ["Rp 300K"],
      mainFeature: "Frontend Pemula",
      features: [
        "Mentorship melalui Chat Grup",
        "Feedback Code",
        "Slide Presentasi",
        "Video COurse 5-6 Jam",
        "Sumber Belajar",
        "Grup Bersama",
        "Free Konsultasi Selamanya",
        "5-10 Person / Batch",
        "4x Discuss/Class Video",
        "4x Mentorship Video 1:1",
        "Mentorship lebih personal",
      ],
      url: ["https://karyakarsa.com/naufaldisatriya/rewards"],
    },
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container id="daftarMentee">
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                <span className="priceAndDuration">
                  <span className="price">
                    {plan.durationPrices[activeDurationIndex]}
                  </span>
                  <span className="slash"> / </span>
                  <span className="duration">
                    {planDurations[activeDurationIndex].text}
                  </span>
                </span>
                <span className="priceAndDuration-wrong">
                  <span className="price-wrong">
                    {plan.durationPricesWrong[activeDurationIndex]}
                  </span>
                  <span className="slash-wrong"> / </span>
                  <span className="duration-wrong">
                    {planDurations[activeDurationIndex].text}
                  </span>
                </span>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton
                  href={plan.url[activeDurationIndex]}
                  target="_blank"
                >
                  Daftar
                </BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
