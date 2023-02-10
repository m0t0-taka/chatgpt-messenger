import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>例</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"何か説明して"</p>
            <p className="infoText">"犬と猫の違いは何？"</p>
            <p className="infoText">"太陽の色は何色？"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>能力</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              ChatGPT Modalを使用できるよう変更してください
            </p>
            <p className="infoText">
              検索文はFirebaseのFirestoreに保存されます
            </p>
            <p className="infoText">
              ChatGPTが考えている間にトーストのお知らせあるよ
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>制限</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">正しくない答えが返ってくることもあるよ</p>
            <p className="infoText">気分を害すことを言うこともあるよ</p>
            <p className="infoText">
              2021年以降のイベントや世界のことは知らないよ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
