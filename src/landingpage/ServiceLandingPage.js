import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features 
        heading={<>Keuntungan <HighlightedText>Mentorship</HighlightedText></>}
      />
      <MainFeature
        heading={<>Kurikulum untuk <HighlightedText>Pemula</HighlightedText></>}
      />
      <Testimonial 
        heading={<>Apa Kata  <HighlightedText>Mereka?</HighlightedText></>}
      />
      <Pricing 
        heading={<>Harga <HighlightedText>Pas</HighlightedText></>}
      />
      <FAQ
        heading={<>Ada  <HighlightedText>Pertanyaan ?</HighlightedText></>}
      />
      <Blog
        subheading="Goal Mentorship"
        heading={<>Mampu Menyelesaikan <HighlightedText>Challenge</HighlightedText></>}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
