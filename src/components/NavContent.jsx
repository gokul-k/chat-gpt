import React from "react";
import NavLinksContainer from "./NavLinksContainer";
import NavPrompt from "./NavPrompt";
import { NewChat, SuggestedChat } from "./NewChat";

const suggestedLogs = [
  "create a normal cashback offer with title iphoneinstantoffer on product iphone and samsung with 100rs absolute discount with minimum transaction amount is 1000 and max transaction amount is 50000 which is valid from 2023-05-05 to 2023-05-06 and can be applicable on creditcard, upi and emi on icici and hdfc banks",
  "create a 2 prediscounted offers with title predisc1instantoffer and predisc2instantoffer with 10% discount on icici creditcard and 20% discount on icici debitcard with minimum transaction amount is 1000 and max transaction amount is 50000 which is valid from 2023-05-05 to 2023-05-06"
]

const NavContent = ({ chatLog, setChatLog, setShowMenu, setInputPrompt }) => {



  return (
    <>

      <SuggestedChat />
      {suggestedLogs.map(
        (chat, idx) =>
          chat && (
            <NavPrompt chatPrompt={chat} key={idx} suggestedPrompt={true} setInputPrompt={setInputPrompt} />
          )
      )}

      <br />
      <br />
      {chatLog.length > 0 ? <NewChat /> : null}

      <div className="navPromptWrapper">
        {chatLog.map(
          (chat, idx) =>
            chat.botMessage && (
              <NavPrompt chatPrompt={chat.chatPrompt} key={idx} setShowMenu={setShowMenu} />
            )
        )}
      </div>
      <NavLinksContainer chatLog={chatLog} setChatLog={setChatLog} />
    </>
  );
};

export default NavContent;
