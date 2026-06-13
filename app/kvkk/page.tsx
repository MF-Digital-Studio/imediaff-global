import { Metadata } from "next"

export const metadata: Metadata = {
  title: "KVKK | iMediaff Global",
  description: "Information notice regarding commercial electronic communications, marketing messages, consent, and opt-out rights for iMediaff Global.",
}

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <header className="mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            KVKK
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            Information Regarding Commercial Electronic Communications
          </p>
        </header>

        <div className="text-gray-800 space-y-6 leading-relaxed font-sans">
          <p>
            Pursuant to Law No. 6563 on the Regulation of Electronic Commerce and the relevant applicable legislation, commercial electronic communications may be sent through electronic communication channels such as telephone, call centers, fax, automatic dialing systems, smart voice recording systems, e-mail, SMS, MMS, and similar means.
          </p>
          <p>
            Commercial electronic communications may be sent to recipients only after obtaining their prior consent. This consent may be obtained in writing, electronically, or through the Commercial Electronic Message Management System where applicable. Consent may be obtained through any electronic communication channel or physical medium. Unless the recipient withdraws their consent, the consent shall remain valid. The recipient may withdraw their consent at any time without providing any reason and may refuse to receive commercial electronic communications. The recipient may exercise this right through the IYS system, where applicable.
          </p>
          <p>
            If the recipient provides their contact information for the purpose of being contacted, commercial electronic communications may be sent regarding changes, use, and maintenance of goods or services provided to the recipient, without requiring separate consent where permitted by applicable legislation.
          </p>
          <p>
            For merchants or tradespersons, prior consent is not mandatory for commercial electronic communications sent to their electronic communication addresses. However, if a merchant or tradesperson refuses to receive commercial electronic communications, further messages may not be sent without obtaining their consent again. In this context, prior to sending any electronic communication, the electronic communication address of the merchant or tradesperson may be checked through the service provider and/or the Commercial Electronic Message Management System where applicable.
          </p>
          <p>
            Pursuant to Law No. 6563 on the Regulation of Electronic Commerce and the relevant applicable legislation, AYDEMIR FATİHHAN GENÇ IMEDIAFF DİJİTAL MEDYA AJANSI, with Tax Identification Number 10876108786, and IMEDIAFF DIJITAL MEDYA AJANSI LIMITED ŞIRKETI, with Tax Identification Number 4740789202, may contact you through electronic communication channels such as SMS, e-mail, telephone, fax, call center, automatic dialing systems, smart voice recording systems, or other electronic communication channels. Such communications may include marketing, promotion, campaign, special day greetings, congratulatory messages, announcements, and other similar commercial communications regarding the services offered by the company.
          </p>
          <p>
            If you have provided consent for commercial electronic communications, you may withdraw your consent at any time without providing any reason and may refuse to receive commercial electronic communications. Depending on the communication channel through which the commercial electronic message is sent, you may use the easy and free opt-out method provided in the message, or you may exercise your right to withdraw consent through the IYS system, where applicable.
          </p>

          <h3 className="font-display text-2xl font-bold tracking-tight text-black mt-12 mb-6">
            Declaration of Consent for Commercial Electronic Communications
          </h3>
          <p>
            By approving this declaration, I acknowledge and consent, pursuant to Law No. 6563 on the Regulation of Electronic Commerce and the relevant applicable legislation, that AYDEMIR FATİHHAN GENÇ IMEDIAFF DİJİTAL MEDYA AJANSI, with Tax Identification Number 10876108786, and IMEDIAFF DIJITAL MEDYA AJANSI LIMITED ŞIRKETI, with Tax Identification Number 4740789202, may contact me through electronic communication channels such as SMS, e-mail, telephone, fax, call center, automatic dialing systems, smart voice recording systems, or other electronic communication channels for marketing, promotion, campaign, special day greetings, congratulatory messages, announcements, and other similar commercial communication purposes related to the company’s services.
          </p>
          <p>
            I further acknowledge that I have been informed that I may withdraw this consent at any time without providing any reason, and that depending on the communication channel through which the commercial electronic message is sent, I may use the easy and free opt-out method provided in the message, or exercise my right to withdraw consent through the IYS system, where applicable.
          </p>
        </div>
      </div>
    </div>
  )
}
