import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function BinaryOptions() {
  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/blog-header.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              Binary Options
            </h1>
            <ul className="flex items-center gap-2 uppercase ">
              <li>
                <Link
                  to={"/"}
                  className="block text-sm font-semibold font-inter text-white/60 transition-colors duration-300 ease-linear hover:text-white"
                >
                  Home
                </Link>
              </li>
              <RxCaretRight className="text-white/60 text-xl" />
              <li>
                <Link className="block text-sm font-semibold font-inter text-white">
                  Binary Options
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1200px] mx-auto  py-16 md:py-24 px-6 md:px-12">
          <div>
            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Cryptocurrency Scams
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Cryptocurrency has captured the world’s attention and
                “Olympic-level scammers” have taken notice too. With the rise in
                popularity of crypto and blockchain technology. The high-tech
                nature of crypto will attract sophisticated scammers capable of
                pulling off “Olympic-level” hacks and schemes…. Experts say it’s
                smart to keep your crypto investments under 5% of your overall
                portfolio. Crypto prices fluctuate wildly by the day, and
                experts also say you’d be smart not to invest more than you’d be
                OK losing if the market dropped out altogether. Crypto
                investments should also never get in the way of other financial
                priorities like saving for emergencies, paying off high-interest
                debt, and saving for retirement using more conventional
                investment strategies. Like it or not, crypto investors are
                opening themselves up to this new and evolving risk of fraud and
                scams. If you’ve incorporated crypto into your investment
                portfolio or are interested in investing in Bitcoin or Ethereum
                in the future, here are some common scams and red flags to look
                out for.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                What Are Some Common Cryptocurrency Scams?
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Almost 7,000 people lost upwards of $80 million in crypto scams
                from October 2020 through March 2021, according to the Federal
                Trade Commission (FTC). That’s a huge jump over the 570
                cryptocurrency investment scams and $7.5 million in losses
                during the same months just the year before. With cryptocurrency
                scams on the rise, here are some patterns to look out for:
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Demanding Crypto-Only Payments
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                If a seemingly credible person or retail establishment claims
                they cannot accept any form of currency other than Bitcoin, it’s
                likely a scam. Bitcoin and other altcoins are a burgeoning asset
                class, so experts say credible institutions aren’t going to
                accept crypto and not also accept U.S. dollars through normal
                means like wire transfers, checks, credit, and debit card
                payments, and cash.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                The lack of KYC protocols on blockchain is a major question mark
                for its widespread use, says Jonathan Padilla, former PayPal
                head of blockchain strategy and CEO and co-founder at
                Snickerdoodle Labs, a California-based blockchain data security
                company that’s looking at using blockchain to give consumers
                ownership of their cookies and browsing data.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Anonymous or Fake Identities
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                If a seemingly credible person or retail establishment claims
                they cannot accept any form of currency other than Bitcoin, it’s
                likely a scam. Bitcoin and other altcoins are a burgeoning asset
                class, so experts say credible institutions aren’t going to
                accept crypto and not also accept U.S. dollars through normal
                means like wire transfers, checks, credit, and debit card
                payments, and cash.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                In general, anyone demanding you pay them in Bitcoin might be
                trying to hoard it and capitalize on its skyrocketing value. And
                unlike banks, blockchain lacks common know-your-customer (KYC)
                protocols. That means people can open wallets without having to
                present valid identification, a Social Security number, or an
                address and contact information. Though blockchain is public and
                creates permanent, open-access records, people can transact on
                blockchain more or less anonymously — making it easy to trick
                you, take your money, and run.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Digital Collectibles and Games
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Like we saw with the “Squid Game” scam, sophisticated coders now
                have the ability to create new games and entire imaginary worlds
                on blockchain. And to do it as quickly as the next viral Netflix
                show takes off.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                An easy way to scam excited blockchain newbies is to get them to
                buy a type of newly minted coin or token for a game. If enough
                people drive the price up through supply and demand, this gives
                the original scammers an opportunity to sell all their holdings
                and disappear in a move known as a “rug pull.” Unlike bank
                accounts for federally regulated currency, there’s no such thing
                as fraud protection or FDIC insurance on the blockchain. When
                your money gets stolen on blockchain, the only way to get it
                back is for the recipient to pay you back directly. On a
                decentralized exchange, that’s highly unlikely. And while
                mainstream crypto exchanges have better fraud security measures
                than lesser-known exchanges, there’s still no guarantee for
                investors to recoup stolen crypto.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Cryptocurrency Investment Schemes
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                New forms of crypto are constantly being minted, and when new
                coins hit the blockchain it’s known as an initial coin offering
                (ICO). But ICOs are also opportunities for scams. A company or
                individual may say they have a once-in-a-lifetime opportunity to
                invest in a new form of crypto with guaranteed 1,000% returns.
                They may then pressure you into depositing a bunch of new coins
                into a digital wallet that’s been compromised somehow, or “pump
                and dump” by buying up the coin and selling when the price
                explodes. Romance Scams
              </p>

              <ul className=" flex flex-col gap-4">
                <li className="font-open-sans text-base font-normal text-[#5f5f5f]">
                  <strong>Romance Scams.</strong> Dating apps are rife with
                  crypto scams. According to the FTC, about 20% of the money
                  lost in romance scams from October 2020 through March 2021 was
                  sent in the form of cryptocurrency. Scams like this involve
                  long-distance or digital relationships in which one party
                  pressures and convinces the other to buy or give money for
                  some new crypto that’s really just a way to scam people out of
                  their money.
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f]">
                  <strong>Phishing Scams.</strong> This type of scam is as old
                  as the internet, but with crypto there are some new
                  implications. Just as a “normal” phishing attack would work,
                  bad actors send emails attempting to bait recipients into
                  clicking links and inputting their personal details —
                  including crypto wallet key info. But unlike most passwords
                  and usernames, you only get one private key to your blockchain
                  wallets. This is part of blockchain’s decentralized design,
                  ensuring that one entity cannot control your information, but
                  it poses an issue if you ever need to change your key.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Anonymous or Fake Identities
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Even the most advanced and enthusiastic cryptocurrency experts
                understand there are many new and evolving risks in the world of
                crypto right now. Some have weathered scams themselves, such as
                the blockchain investor and entrepreneur Ian Balina, who said he
                lost $2.5 million after his private wallet key information was
                compromised by someone hacking into his Evernote account.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Balina’s story highlights the possibility of loss and fraud when
                dealing with such a new, volatile asset class, even for
                successful investors. Financial experts advise most passive
                investors to keep crypto holdings to under 5% of their
                portfolios, and never to invest in crypto at the expense of
                saving for emergencies or paying off high-interest debt. If you
                feel ready to start investing in crypto, here are some best
                practices to protect your money.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Cryptocurrency Red Flags For starters, watch out for some common
                red flags that are similar to classic money wiring scams and
                credit card fraud:
              </p>
              <ul className="list-disc flex flex-col gap-4">
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Typographical errors and obvious misspellings in emails, on
                  social media posts, and during any communication
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Promises to multiply your money
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Contractual obligations that lock you into holding crypto
                  without being able to sell
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Fake influencers or claims to be a celebrity
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Psychological manipulation like blackmail or extortion
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Large social media crypto schemes
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Promises of free money
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Vague details about where your money is going
                </li>
              </ul>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] my-5">
                Did you get scammed In a cryptocurrency scam..how can you get
                your scammed crypto back If you’ve been the victim of
                cryptocurrency or bitcoin scams, don’t be discouraged because of
                the immeasurable fraud and the figure of individuals damaged
                over the past 8 years.. regulators globally We want you to take
                comfort in knowing that many people have recovered Bitcoin and
                other cryptocurrencies – nothing is truly anonymous. A great
                first step is to utilize our recovery company is by contacting
                us via our email or filling out our personal information form.
                We will assign someone to your case who will work with you
                throughout this challenging process and try every possible
                method to get your cryptocurrency back. Check out the
                testimonials and reviews for yourself – we have an
                industry-leading track record.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
