import { store } from "./index";
import labo01Img from "/src/assets/labs/情報セキュリティ.svg";
import labo02Img from "/src/assets/labs/計算言語学.svg";
import labo03Img from "/src/assets/labs/ビジュアルコンピューティング.svg";
import labo04Img from "/src/assets/labs/インタラクションデザイン.svg";
import labo05Img from "/src/assets/labs/メディアインタフェース.svg";
import labo06Img from "/src/assets/labs/感性工学.svg";
import labo07Img from "/src/assets/labs/音響コミュニケーション.svg";
import labo08Img from "/src/assets/labs/インタラクティブグラフィックス.svg";
import labo09Img from "/src/assets/labs/実空間コンピューティング.svg";
import labo10Img from "/src/assets/labs/Web工学.svg";
import labo11Img from "/src/assets/labs/知的メディア.svg";
import labo12Img from "/src/assets/labs/知的計算システム.svg";
import labo13Img from "/src/assets/labs/アクセシブルテクノロジー.svg";


export default {
  namespaced: true,
  state: {
    labo: {
      labo_1: {
        eventType: "終日開催",
        display: true,
        cardTitle: "情報セキュリティ研究室",
        title: "情報セキュリティ研究室",
        professor: {
          name: "寺田 真敏 ",
          type: "教授",
        },
        tags: ["ネットワークセキュリティ", "暗号応用"],
        place: "1号館4階演習室",
        info: "インターネットの進展に伴いセキュリティが重要な課題になっています。安全を守るだけでなく新しいインターネット応用を実現するために、暗号、不正侵入・攻撃防御技術、機械学習による検知技術、無線LAN・IoTセキュリティ、ITリスク評価技術等の研究を行っています。",
        theme: [
          "IoTマルウェアの長期的な動的活動観測システムの検討",
          "ARを活用したリアルタイム通信可視化システムの提案",
        ],
        placeOfEmployment: [
          "NTTコミュニケーションズ",
          "NECセキュリティ",
          "野村総合研究所",
          "ラック",
          "三菱UFJ銀行",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/isl1/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo01Img,
        mapKey: ["map_2"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/tp6_IxRhKR4?si=N_rm7nIyY9eXL3zL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_2: {
        eventType: "終日開催",
        display: true,
        cardTitle: "計算言語学研究室",
        title: "計算言語学研究室",
        professor: {
          name: "大野 誠寛 ",
          type: "教授",
        },
        tags: ["自然言語処理", "話し言葉処理"],
        place: "1号館4階演習室",
        info: "我々は、文書やWeb、人とのコミュニケーション等を通じて、様々な情報を獲得し、整理し、発信しています。このような知的活動を行うには、言葉が必要不可欠といえます。本研究室では、大量の言語情報を活用・処理し、人の知的活動を計算機によって支援する技術の開発を目指しています。",
        theme: ["話し言葉の解析に関する研究", "テキスト作成支援に関する研究"],
        placeOfEmployment: [
          "クレスコ",
          "フレクト",
          "NTTPCコミュニケーションズ",
          "アトラスシー",
          "オプティム",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/cll/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo02Img,
        mapKey: ["map_2"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/MTnLkHxzh7U?si=tcliMZuNjDgoUx2-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      // labo_3: {
      //   eventType: "終日開催",
      //   display: true,
      //   cardTitle: "ビジュアルコンピューティング\n研究室",
      //   title: "ビジュアルコンピューティング研究室",
      //   professor: {
      //     name: "高橋 時市郎 ",
      //     type: "教授",
      //   },
      //   tags: ["コンピュータグラフィックス", "VR", "AR"],
      //   place: "1号館5階 0513A／0513B教室",
      //   info: "ヒトの視力を超える8Kスーパーハイビジョン。超高解像度・超高精細な8KCG映像をつくる技術と、臨場感にあふれるVR(仮想現実感)/AR(拡張現実感)技術の研究を進めています。実写画像を印象派風絵画に変換する技術や、自動車や自転車のVR運転シミュレータを開発しています。",
      //   theme: [
      //     "8Kスーパーハイビジョン映像の高速処理の研究",
      //     "VR災害体験シミュレーション技術に関する研究",
      //   ],
      //   placeOfEmployment: [
      //     "日立製作所",
      //     "凸版印刷",
      //     "スクウェア・エニックス",
      //     "コーエーテクモホールディングス",
      //     "富士通",
      //   ],
      //   links: [
      //     {
      //       name: "",
      //       url: "https://www.im.dendai.ac.jp/laboratory/vcl/",
      //     },
      //     {
      //       name: "▶︎ おすすめ質問TOP10",
      //       url: "/questions-top10",
      //     },
      //   ],
      //   img: labo03Img,
      //   mapKey: ["map_3"],
      //   video:
      //     '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/sNc4kG-97y4?si=YWXC6e7798GSWHot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      // },
      labo_4: {
        eventType: "終日開催",
        display: true,
        cardTitle: "インタラクションデザイン\n研究室",
        title: "インタラクションデザイン研究室",
        professor: {
          name: "小玉 周平 ",
          type: "准教授",
        },
        tags: ["コンピュータグラフィックス", "ユーザインタフェース"],
        place: "1号館5階メディアラボ",
        info: "コンピュータと人々とのインタラクションを上手くデザインすることで、私たちの生活をより豊かにすることを目標に研究を行っています。CG、XR(VR/AR/MR)、AI、画像処理などのメディア情報処理に関わる幅広い分野で新時代を気づく新しい技術やコンテンツの研究開発をしています。",
        theme: [
          "プロジェクタを用いたラテアートの制作支援",
          "XR技術を使った音楽鑑賞体験の拡張",
        ],
        placeOfEmployment: ["日本電気(NEC)", "NTT-AT", "三菱電機デジタルイノベーション"],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/vcl-2/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo04Img,
        mapKey: ["map_3"],
        //video:
         // '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/sNc4kG-97y4?si=YWXC6e7798GSWHot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
    //   labo_5: {
    //     eventType: "終日開催",
    //     display: true,
    //     cardTitle: "メディア応用研究室",
    //     title: "メディア応用研究室",
    //     professor: {
    //       name: "鉄谷 信二 ",
    //       type: "教授",
    //     },
    //     tags: ["映像表現", "視覚心理"],
    //     place: "1号館5階 0515A教室",
    //     info: "画像・映像に対する視覚心理の観点から、大画面表示における臨場感表示の研究、見慣れているコンテンツに対しての違和感と記憶の評価、錯視画像における見え方の研究、2D・3Dコンテンツ表示の心理的影響、眼の動きの視線情報からのコンテンツ評価等の研究テーマを進めています。",
    //     theme: [
    //       "仮想空間バスケットボールの跳躍運動の感覚に関する研究",
    //       "VR空間での歩行時および跳躍時の移動感覚に関する研究",
    //     ],
    //     placeOfEmployment: [
    //       "NTTテクノクロスサービス",
    //       "NTTデータ・アイ",
    //       "NECソリューションイノベータ",
    //       "NTTデータ・フィナンシャル・ソリューションズ",
    //       "ソルクシーズ",
    //     ],
    //     links: [
    //       {
    //         name: "",
    //         url: "https://www.im.dendai.ac.jp/laboratory/mal/",
    //       },
    //       {
    //         name: "▶︎ おすすめ質問TOP10",
    //         url: "/questions-top10",
    //       },
    //     ],
    //     img: labo05Img,
    //     mapKey: ["map_3"],
    //     video:
    //       '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/caTgw69Ei5U?si=ye9tLof7msAWHQvW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    //   },
    labo_5: {
        eventType: "終日開催",
        display: true,
        cardTitle: "メディアインタフェース研究室",
        title: "メディアインタフェース研究室",
        professor: {
          name: "佐藤 隆 ",
          type: "教授",
        },
        tags: ["ヒューマンコンピュータインタラクション", "映像インターフェース"],
        place: "1号館4階演習室",
        info: "YouTubeやTikTokなど膨大な動画があるれている現在、視聴の”タイパ”を向上することが求められています。動画の構造解析と人間の視聴覚特性を活用して、短時間に動画の内容を把握できるインタフェース技術を研究しています。",
        theme: [
          "動画早送り再生と内容理解度の研究",
          "動画の構造と意味解析を応用したアノテーション支援",
        ],
        placeOfEmployment: [
          "日本放送協会(NHK)",
          "東北新社",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/mil/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo05Img,
        mapKey: ["map_2"],
        //video:
          //'<iframe width="100%" height="auto" src="https://www.youtube.com/embed/caTgw69Ei5U?si=ye9tLof7msAWHQvW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_6: {
        eventType: "終日開催",
        display: true,
        cardTitle: "感性工学研究室",
        title: "感性工学研究室",
        professor: {
          name: "井ノ上 寛人 ",
          type: "准教授",
        },
        tags: ["メディアプログラミング", "ゲームUI／UXデザイン"],
        place: "1号館4階演習室",
        info: "ヒトの心理や感性の特徴を観測し、データ解析の結果から科学的再現し得がある法則を導き出して、機能性と感性的な満足感の工場を目指す感性工学をテーマとしています。特に、本研究室ではビデオゲームやWebサービスの動き、配色、デザイン、人口知能(AI)技術当について研究しています。",
        theme: [
          "アクションゲームにおける「ヒットストップ」の視覚効果に関する研究",
          "日本における色付きマスクの感性的な効用に関する研究",
        ],
        placeOfEmployment: [
          "ソニー・インタラクティブエンタテイメント",
          "カプコン",
          "サイバーエージェント",
          "グリー",
          "Sun Asterisk",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/mal-2/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
          {
            name: "▶︎ インタラクティブメディアとデザイン（講義動画）",
            url: "/lecture-video#lecture_3",
          },
          {
            name: "▶︎ コンピュータプログラミングⅠ・II（講義動画）",
            url: "/lecture-video#lecture_5",
          },
        ],
        img: labo06Img,
        mapKey: ["map_2"],
        //video:
         // '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/caTgw69Ei5U?si=ye9tLof7msAWHQvW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_7: {
        eventType: "終日開催",
        display: true,
        cardTitle: "音響コミュニケーション研究室",
        title: "音響コミュニケーション研究室",
        professor: {
          name: "池田 雄介 ",
          type: "教授",
        },
        tags: ["音響工学", "VR", "AR","MR"],
        place: "1号館5階メディアラボ",
        info: "音は生活や文化にとって重要ですが、その理解や制御は簡単ではありません。そこで、MR(複合現実)技術や深層学習を用いた音場の分析・可視化や音のVR技術である音場合成技術、しょしてそれらあを支える音響計測技術等、音を良く知り、自由に創り出す技術の研究等を行っています。",
        theme: [
          "複合現実技術を用いた音場の可視化",
          "物理モデルを用いた音場計測と音場再現",
        ],
        placeOfEmployment: ["KORG", "ローランド", "小野測器", "NTTドコモ", "綜合警備保障(ALSOK)"],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/acl/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo07Img,
        mapKey: ["map_3"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/X7N-3I7BjDI?si=mDhaBXk2NUVybkSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_8: {
        eventType: "終日開催",
        display: true,
        cardTitle: "ビジュアルコンピューティング\n研究室",
        title: "ビジュアルコンピューティング研究室",
        professor: {
          name: "森谷 友昭 ",
          type: "准教授",
        },
        tags: ["コンピュータアニメーション", "ゲームグラフィックス"],
        place: "1号館5階メディアラボ",
        info: "ビデオゲームやVR/AR(仮想現実/拡張現実)に必要なリアルタイムコンピュータグラフィックスの新たな活用方法や、表現方法を日々研究しています。また、エンターテインメント分野だけではなく、時間経過による建物の外観の変化シミュレーションなど実用的な研究も行っています。",
        theme: [
          "スケッチインタフェースによる3Dモデル毛皮生成手法",
          "ゲームにおける3DCGモデルアニメーション遷移の違和感軽減に関する研究",
        ],
        placeOfEmployment: [
          "三菱電機インフォメーションシステムズ",
          "TOPPAN",
          "アトラス",
          "コナミデジタルエンタテイメント",
          "Cygames",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/vcl/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
          {
            name: "▶︎ CGモデリングおよび演習（講義動画）",
            url: "/lecture-video#lecture_6",
          },
          {
            name: "▶︎ CGレンダリングおよび演習（講義動画）",
            url: "/lecture-video#lecture_7",
          },
        ],
        img: labo08Img,
        mapKey: ["map_3"],
        //video:
         // '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/7WcNYP0b58o?si=jV7wIywlVeFTBnoL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_9: {
        eventType: "終日開催",
        display: true,
        cardTitle: "実空間コンピューティング研究室",
        title: "実空間コンピューティング研究室",
        professor: {
          name: "岩井 将行 ",
          type: "教授",
        },
        tags: ["IoT", "ウエラブル防災センシング"],
        place: "1号館5階メディアラボ",
        info: "環境情報や生体情報を取得活用するIoTを始め、Edge-AI、ビッグデータ、映像認識、xR、機械学習システムの研究を行っています。防災・環境・生体モニタリング、ウェアラブル、位置情報、空間スキャン、行動解析、映像解析、ブラウザ技術、LLM+RAG応用を研究しています。",
        theme: [
          "休耕田における省電力無線技術を活用したIoTセンサノードの開発及び運用技術",
          "楽器未経験者のための弦管打複合電子楽器kiMeraの開発",
        ],
        placeOfEmployment: [
          "ソニー",
          "サイバーエージェント",
          "ソフトバンク",
          "チームラボ",
          "メドレー",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/cps/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo09Img,
        mapKey: ["map_3"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/Z0IN9-oITrk?si=WNN71PAzFxG8FHdV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_10: {
        eventType: "終日開催",
        display: true,
        cardTitle: "Web工学研究室",
        title: "Web工学研究室",
        professor: {
          name: "増田 英孝 ",
          type: "教授",
        },
        tags: ["インターネット", "情報検索"],
        place: "1号館4階演習室",
        info: "インターネットでは、ブログやTwitter(X)、Wikipediaのように参加者自身がコンテンツを作成・公開していくことができます。このような大量のコンテンツの中から、利用者が必要としている情報を抽出・推薦・分類・統合して活用するための研究を行っています。",
        theme: [
          "主端末作業に関する支援情報表示が可能な補助端末連携システム",
          "テーマパークにおけるコラージュ画像を用いた撮影場所推薦",
        ],
        placeOfEmployment: [
          "NTTコムウェア",
          "日立システムズ",
          "NTTデータ・アイ",
          "富士通Japan",
          "KDDI",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/cdl/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
          {
            name: "▶︎ 情報メディア学基礎（講義動画）",
            url: "/lecture-video#lecture_2",
          },
          {
            name: "▶︎ データベースプログラミング演習（講義動画）",
            url: "/lecture-video#lecture_4",
          },
        ],
        img: labo10Img,
        mapKey: ["map_2"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/25mSbIzOLWA?si=HnzElTp9fe2YXnX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_11: {
        eventType: "終日開催",
        display: true,
        cardTitle: "知的メディア研究グループ",
        title: "知的メディア研究グループ",
        professor: {
          name: "山田 剛一 ",
          type: "講師",
        },
        tags: ["自然言語処理", "人工知能"],
        place: "1号館4階演習室",
        info: "Twitter, Instagram に代表されるソーシャルメディアは、人々の日々の思いを反映する巨大な情報源です。そこで話される内容やユーザ同士の関係を分析することで、世論の動向から友達関係の深さまで、幅広い情報を得ることができます。これらの情報を活用することで、自社製品の評判を知りたい企業から、円滑なコミュニケーションを求めるユーザまで、幅広く支援をすることができます。本研究グループでは、ソーシャルメディアの分析とユーザ支援のための知的システムの研究・開発をしています。",
        theme: [
          "レビューテキストを用いた宿泊施設比較のための依存構造解析を用いたアスペクト階層の構築",
          "大規模イベントにおける現地ツイートを用いた混雑状況可視化システムの提案",
        ],
        placeOfEmployment: [
          "日本電気(NEC)",
          "ビッグローブ",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/cll_lecturer/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo11Img,
        mapKey: ["map_2"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/25mSbIzOLWA?si=HnzElTp9fe2YXnX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_12: {
        eventType: "終日開催",
        display: true,
        cardTitle: "知的計算システム研究室",
        title: "知的計算システム研究室",
        professor: {
          name: "金子 直史 ",
          type: "准教授",
        },
        tags: ["メディア情報処理", "人工知能"],
        place: "1号館4階演習室",
        info: "人間は画像、映像、音声、文字など様々な情報から柔軟に世界を理解していますが、コンピュータに同じことをさせるのは簡単ではありません。本研究室では、コンピュータをより知的に進化させることを目指して、コンピュータビジョンやパターン認識、機械学習等に対する研究を行っています。",
        theme: ["監視カメラ映像からの異常行動検知", "アニメやイラスト内の人物に対する認証理解"],
        placeOfEmployment: [
          "NEC",
          "富士電機",
          "日立ソリューションズ",
          "NTTテクノクロス",
          "沖電気工業",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/cal-2/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo12Img,
        mapKey: ["map_2"],
        video:
          '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/Kwid9-bEi14?si=SOU_SWbe6MLilItr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      labo_13: {
        eventType: "終日開催",
        display: true,
        cardTitle: "アクセシブルテクノロジー研究室",
        title: "アクセシブルテクノロジー研究室",
        professor: {
          name: "川澄 正史 ",
          type: "特定教授",
        },
        tags: ["生体情報", "コミュニケーション支援技術"],
        place: "1号館5階メディアラボ",
        info: "情報技術の発展により、人と情報機器との共存場面が増し、人間の情報処理機能の理解やコミュニケーション支援技術の開発が重要になってきました。このために当研究室では、人間中心設計というキーワードを挙げ、人の生活を豊かにする電子情報支援技術に関する研究、脳活動や視線移動など生体情報を工学的立場から解析する研究、QOL向上を目指した生活支援工学の研究など、基礎技術から応用技術に至る範囲の研究を学内外機関とも共同し、幅広く行っています。",
        theme: [
          "ペンタブレットを用いたペン習字学習支援システム",
          "母指によるスマートフォン操作特性に関する研究",
        ],
        placeOfEmployment: [
          "大塚商会",
          "クレスコ",
        ],
        links: [
          {
            name: "",
            url: "https://www.im.dendai.ac.jp/laboratory/atcl/",
          },
          {
            name: "▶︎ おすすめ質問TOP10",
            url: "/questions-top10",
          },
        ],
        img: labo13Img,
        mapKey: ["map_3"],
        //video:
        //  '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/25mSbIzOLWA?si=HnzElTp9fe2YXnX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
    },
  },
  getters: {
    getAllLabsData(state) {
      return state.labo;
    },
  },
};
