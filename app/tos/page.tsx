import Link from 'next/link';
import { getSEOTags } from '@/libs/seo';
import config from '@/config';

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Termos de Serviço | ${config.appName}`,
  canonicalUrlRelative: '/tos',
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Termos de Serviço da {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: 'sans-serif' }}
        >
          {`Última atualização: 14 de abril de 2024

Bem-vinda(o) à Helplit!

Estes Termos de Serviço ("Termos") regem o uso do website Helplit (https://helplit.com) e todos os seus serviços relacionados, disponibilizados pela Helplit ("nós", "nosso", "nós").

Ao acessar ou usar o nosso website e os nossos serviços, você concorda em cumprir estes Termos. Se você não concordar com qualquer parte destes Termos, não poderá acessar o website ou utilizar os nossos serviços.

1. Descrição dos Serviços

A Helplit é uma comunidade docente por assinatura que oferece ferramentas e conhecimento para a criação de aulas inovadoras na Educação Básica. Ao assinar o serviço, os usuários podem acessar ideias de aulas inovadoras para seus planos de aulas. Eles podem customizar e replicar os conteúdos em sala de aula, mas não podem revendê-los em outros ambientes. Os usuários têm o direito de solicitar um reembolso total no prazo de 14 dias após a compra.

2. Coleta de Dados

Para fornecer os nossos serviços, coletamos e armazenamos informações pessoais dos usuários, incluindo nome, e-mail e informações de pagamento. Também podemos utilizar cookies da web para coletar dados não pessoais sobre a sua interação com o nosso website.

3. Lei Aplicável

Estes Termos são regidos e interpretados de acordo com as leis do Brasil.

4. Atualizações nos Termos

Reservamo-nos o direito de atualizar ou modificar estes Termos a qualquer momento, a nosso critério exclusivo. Quaisquer alterações significativas serão comunicadas aos usuários por e-mail.

Para obter mais informações sobre como tratamos seus dados pessoais, consulte a nossa Política de Privacidade em https://helplit.com/privacy-policy.

Se você tiver alguma dúvida ou preocupação sobre estes Termos, entre em contato conosco pelo e-mail helplitapp@gmail.com.

Obrigado por escolher a Helplit!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
