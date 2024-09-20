import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Forex() {
  return (
    <>
      <section className="w-full h-[300px] md:h-[400px] bg-[url('/images/blog-header.jpg')] bg-no-repeat bg-cover  bg-center flex items-center">
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-prata text-3xl md:text-[2.625rem] font-normal text-white flex-1">
              Forex
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
                  Forex
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
                Forex
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                The spot forex market traded over $6.6 trillion a day as of
                April 2019, including currency options and futures contracts.1
                With this enormous amount of money floating around in an
                unregulated spot market that trades instantly, over the counter,
                with no accountability, forex scams offer unscrupulous operators
                the lure of earning fortunes in limited amounts of time. While
                many once-popular scams have ceased—thanks to serious
                enforcement actions by the Commodity Futures Trading Commission
                (CFTC) and the 1982 formation of the self-regulatory National
                Futures Association (NFA)—some old scams linger, and new ones
                keep popping up.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Back in the Day: The Point-Spread Scam
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                An old point-spread forex scam was based on computer
                manipulation of bid-ask spreads. The point spread between the
                bid and ask basically reflects the commission of a
                back-and-forth transaction processed through a broker. These
                spreads typically differ between currency pairs. The scam occurs
                when those point spreads differ widely among brokers.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Key Takeaways
              </h2>
              <ul className="list-disc flex flex-col gap-4">
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Many scams in the forex market are no longer as pervasive due
                  to tighter regulations, but some problems still exist.
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  One shady practice is when forex brokers offer wide bid-ask
                  spreads on certain currency pairs, making it more difficult to
                  earn profits on trades.
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Be careful of any offshore, unregulated broker.
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  Individuals and companies that market systems—like signal
                  sellers or robot trading—sometimes sell products that are not
                  tested and do not yield profitable results.
                </li>
                <li className="font-open-sans text-base font-normal text-[#5f5f5f] ml-4">
                  If the forex broker is commingling funds or limiting customer
                  withdrawals, it could be an indicator that something fishy is
                  going on.
                </li>
              </ul>

              <p className="font-open-sans text-base font-normal text-[#5f5f5f] my-5">
                For instance, some brokers do not offer the normal two-point to
                three-point spread in the EUR/USD but spreads of seven pips or
                more. (A pip is the smallest price move that a given exchange
                rate makes based on market convention. Since most major currency
                pairs are priced to four decimal places, the smallest change is
                that of the last decimal point.) Factor in four or more
                additional pips on every trade, and any potential gains
                resulting from a good trade can be eaten away by commissions,
                depending on how the forex broker structures their fees for
                trading.
              </p>

              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Tendencies still exist, and it’s quite easy for firms to pack up
                and disappear with the money when confronted with actions. Many
                saw a jail cell for these computer manipulations. But the
                majority of violators have historically been United States-based
                companies, not the offshore ones.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                The Signal-Seller Scam
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                A popular modern-day scam is the signal seller. Signal sellers
                are retail firms, pooled asset managers, managed account
                companies, or individual traders that offer a system—for a
                daily, weekly, or monthly fee—that claims to identify favorable
                times to buy or sell a currency pair based on professional
                recommendations that will make anyone wealthy. They tout their
                long experience and trading abilities, plus testimonials from
                people who vouch for how great a trader and friend the person
                is, and the vast wealth that this person has earned for them.
                All the unsuspecting trader has to do is hand over X amount of
                dollars for the privilege of trade recommendations.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Many of signal-seller scammers simply collect money from a
                certain number of traders and disappear. Some will recommend a
                good trade now and then, to allow the signal money to
                perpetuate. This new scam is slowly becoming a wider problem.
                Although there are signal sellers who are honest and perform
                trade functions as intended, it pays to be skeptical.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                “Robot” Scamming in Today’s Market
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                A persistent scam, old and new, presents itself in some types of
                forex-developed trading systems. These scammers tout their
                system’s ability to generate automatic trades that, even while
                you sleep, earn vast wealth. Today, the new terminology is
                “robot” because the process is fully automated with computers.
                Either way, many of these systems have never been submitted for
                formal review or tested by an independent source.
              </p>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Examination of a forex robot must include the testing of a
                trading system’s parameters and optimization codes. If the
                parameters and optimization codes are invalid, the system will
                generate random buy and sell signals. This will cause
                unsuspecting traders to do nothing more than gamble. Although
                tested systems exist on the market, potential forex traders
                should do some research before putting money into one of these
                approaches.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Boiler room scams
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                This type of scam involves the scammers usually getting people
                to buy shares in a worthless private company on the promise that
                when the company goes public their shares will increase
                substantially. They depend on using “urgency” – suggesting that
                an opportunity will be lost if they do not act quickly which
                prevents the target from being able to research the opportunity
                properly. However, often the company doesn’t really exist and
                may have a fake telephone number, office and website. Once the
                scammers have made all the money they can, they will disappear
                with everyone’s investments.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                High yield investment programs
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                High yield investment programmes (HYIP) are frequently just a
                form of Ponzi scheme in which a high level of return is promised
                for a small initial investment into what is in fact a Forex
                fund. However, in reality, the initial investors are being paid
                back from the money generated by the current investors and a
                constant flow of new investors is required to keep the funds
                flowing, once there are no more investors in the scheme the
                owners usually close it down and take all the remaining money.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                Manipulation of bid/ask spreads
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                These types of scams have decreased over the years yet they are
                still around. This is why it is important to choose a Forex
                broker who is registered with a regulatory agency. These type of
                scams would normally involve having spreads of around 7-8 pips
                instead of between 2-3 pips which is the norm.
              </p>

              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Other Factors to Consider Traditionally, many trading systems
                have been quite costly, up to $5,000 or more. This can be viewed
                as a scam in itself. No trader should pay more than a few
                hundred dollars for a proper system today. Be especially careful
                of system sellers who offer programs at exorbitant prices
                justified by a guarantee of phenomenal results. Instead, look
                for legitimate sellers whose systems have been properly tested
                to potentially earn income.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="font-open-sans text-lg font-bold text-[#5f5f5f] mb-2">
                What do I do if I have been scammed?
              </h2>
              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                Skyline recovery is a leading funds recovery company with a team
                of experienced professionals specializing in Forex fraud. they
                assists traders in civil and criminal actions against
                unregulated Forex companies, online internet fraudsters, and
                pyramid schemes created on a Ponzi-style structure. They also
                specializes in legal actions against Binary Options trading
                companies. Recovering funds in the forex trading market is
                difficult. The difficulty increases when you use an unregulated
                broker. Adding to the problem is the near impossibility of
                recompense from the scammers who defrauded you. But we at MAFG
                RIA have a proven track record of success in helping investors
                who have been the victims of a scam or fraud.
              </p>

              <p className="font-open-sans text-base font-normal text-[#5f5f5f] mb-5">
                We are a regulated recovery company that focuses on some of the
                more complicated financial investments: forex, binary options,
                cryptocurrency, and stocks.In addition to our professional forex
                recovery services, our team of experts focuses on customer
                outreach and we attempt to mitigate the damage that fraudulent
                actors have caused to our clients.Contact us today for a free
                consultation or send us an email and our professionals will work
                with you throughout the entire process to get you maximum
                returns!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
