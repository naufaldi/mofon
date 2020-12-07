import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion.custom(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  subheading = "FAQS",
  heading = "Kamu punya pertanyaan ?",
  description = "Bertanyalah sebelum sesat berjalan.",
  faqs = [
    {
      question: "Apa perbedaan Mentee Reguler dan Tier 1 ?",
      answer:
        "Mentee reguler tidak bisa melakukan mentroship kelas video dan mentorship 1:1 video call. Kelas video dan 1:1 Video Call bisa diibaratkan seperti Les Privat / Bimbingan personal.",
    },
    {
      question: "Bagimana teknis Class Video / Mentorship Video 1:1 ?",
      answer:
        "Seperti ditempat les, Class Video kita akan mengadakan workshop/webinar khusus berisi 5-10 orang. Mentorship Video 1:1 seperti Les Privat. Saya akan menjadi private tutor /pendamping untuk temen-temen belajar frontend selama satu minggu.",
    },
    {
      question: "Berapa Kuota untuk Mentee Tier 1 ?",
      answer:
        "Biasanya saya akan membuat 5 - 7 orang perbatch. Tergantung waktu yang saya miliki. Karena tujuannya adalah untuk mentoring jadi harus insentif dan bisa lebih personal.",
    },
    {
      question: "Berapa Kuota untuk Mentee Reguler ?",
      answer:
        "Tidak ada batasan kuota karena tidak ada sesi video call. Tetapi, tetap bisa konsultasi melalui grup.",
    },
    {
      question: "Apakah ini bisa diikuti oleh pemula ?",
      answer:
        "Tentu saja! Justru mentorship ini dibuat untuk para pemula supaya bisa belajar bersama.",
    },
    {
      question: "Ada syaratnya untuk bisa mengikuti mentorship ?",
      answer:
        "Setidaknya tahu cara kerja internet dan komputer. Kalau belum bisa melihat di Khan academy mengenai cara kerja komputer dan internet",
    },
    {
      question: "Berapa durasi mentorship ?",
      answer:
        "Untuk Mentee Reguler dan Mentee Tier 1, 1 Bulan sudah lebih dari cukup untuk membuat temen2 bisa memiliki skill/kemampuan untuk slicing, git dan deploy vercel",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
