import Link from 'next/link';
import { getSEOTags } from '@/libs/seo';
import config from '@/config';

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Política de Privacidade | ${config.appName}`,
  canonicalUrlRelative: '/privacy-policy',
});

const PrivacyPolicy = () => {
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
          </svg>{' '}
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Política de Privacidade da {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: 'sans-serif' }}
        >
          {`Última atualização: 14 de abril de 2024

A Helplit ("nós", "nosso", "nós") valoriza a privacidade dos nossos usuários e está empenhada em proteger as informações pessoais que você compartilha conosco. Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações quando você utiliza o nosso website https://helplit.com.

1. Coleta de Dados

Coletamos e armazenamos informações pessoais dos usuários, incluindo nome, e-mail e informações de pagamento, para processar pedidos e fornecer os nossos serviços. Também podemos utilizar cookies da web para coletar dados não pessoais sobre a sua interação com o nosso website.

2. Compartilhamento de Dados

Não compartilhamos as informações pessoais dos usuários com terceiros, exceto quando necessário para processar pedidos ou conforme exigido por lei.

3. Privacidade das Crianças

Não coletamos intencionalmente informações pessoais de crianças menores de 13 anos. Se tomarmos conhecimento de que coletamos informações de uma criança menor de 13 anos, tomaremos medidas para excluir essas informações o mais rápido possível.

4. Atualizações na Política de Privacidade

Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento, a nosso critério exclusivo. Quaisquer alterações significativas serão comunicadas aos usuários por e-mail.

Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco pelo e-mail helplitapp@gmail.com.

Obrigado por escolher a Helplit!

Ao usar a Helplit, você concorda com os termos desta Política de Privacidade.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
