// The privacy policy, worded from how the app actually behaves (see website.md in the project notes).
// If the app starts sending anything anywhere (for example the Claude card maker returns), update this first.
export const privacyUpdated = '2026-10-21';
export const contactEmail = 'lemonpepperstudioco@gmail.com';

type Section = { heading: string; body: string[] };
export const privacy: Record<'en' | 'ja', { title: string; intro: string; updated: string; sections: Section[] }> = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: 21 October 2026',
    intro:
      'Hinto is a flashcard app for iPhone made by Kabosu Lab. In short: there is no account and no tracking, and no server receives your data. Your cards and your study history stay on your iPhone.',
    sections: [
      {
        heading: 'What we collect',
        body: [
          'Nothing that identifies you. Hinto has no account or sign-in, no analytics, no advertising and no tracking. We do not run a server that receives your data, and we do not sell or share data with anyone. The only exception is crash reports, described below.',
        ],
      },
      {
        heading: 'What stays on your iPhone',
        body: [
          'Your decks, cards, pictures and recordings, the pages you scan or import, your study history and streak, and your settings are stored on your iPhone only.',
          'They are included in your iPhone’s iCloud backup if you use it. That backup is handled by Apple under Apple’s privacy policy; we cannot see it.',
        ],
      },
      {
        heading: 'Camera, photos, microphone and notifications',
        body: [
          'Hinto asks for the camera to scan pages and for the microphone to record audio on a card. Photos are chosen with Apple’s photo picker, so Hinto sees only the pictures you pick, not your library. It asks to send notifications only if you turn on the daily reminder. What these features capture is used only inside the app on your iPhone.',
        ],
      },
      {
        heading: 'Making cards with AI',
        body: [
          'On an iPhone with Apple Intelligence, Hinto can read your pages with Apple’s model on the device. The pages do not leave your iPhone. You can turn this off in Settings → AI card maker.',
          'Without it, Hinto makes cards with its own rules and a dictionary (JMdict) on your iPhone.',
        ],
      },
      {
        heading: 'Hinto’s decks (Discover)',
        body: [
          'The Discover tab downloads the list of Hinto’s decks, their cover pictures and the decks you get from a file host (Cloudflare R2). Only downloads happen: nothing about you or your study is uploaded, and the request carries no account or identifier.',
          'Like any website, the host sees your iPhone’s IP address when it sends the files. We don’t use it to identify you, and we don’t combine it with anything else. Cloudflare handles it under its own privacy policy.',
        ],
      },
      {
        heading: 'What leaves your iPhone, and only when you choose',
        body: [
          'Deck files: when you share a deck, the file you send contains the deck’s cards, its pictures and audio, and your display name as its creator. Your study history is never included.',
          'Debug info: Settings → Support → Share debug info builds a file with the app version, iPhone model, crash reports and recent app logs, and opens the share sheet. Card text and deck names are left out. It is sent only if you choose to send it.',
          'Email: Settings → Support → Contact us opens an email to us with the app version, iOS version and iPhone model filled in. We receive what you send, and your email address, and use them only to reply.',
        ],
      },
      {
        heading: 'Crash reports',
        body: [
          'If Hinto crashes or freezes, iOS gives the app a report of what went wrong. Hinto keeps these reports on your iPhone. They are sent to us only if you choose Settings → Support → Share debug info.',
          'Separately, if you have turned on Share With App Developers in your iPhone’s Settings (Privacy & Security → Analytics & Improvements), Apple may share anonymous crash reports and usage statistics with us. Apple collects these under its own privacy policy, and they do not identify you. You can turn this off at any time in the same place.',
        ],
      },
      {
        heading: 'Children',
        body: ['Hinto collects no personal information from anyone, including children.'],
      },
      {
        heading: 'Changes',
        body: [
          'If this policy changes, for example because the app gains a feature that sends data somewhere, we will update this page and its date before that version of the app is released.',
        ],
      },
      {
        heading: 'Contact',
        body: [`Questions about privacy: ${contactEmail}`],
      },
    ],
  },
  ja: {
    title: 'プライバシーポリシー',
    updated: '最終更新日：2026年10月21日',
    intro:
      'Hintoは、Kabosu Labが提供するiPhone用のフラッシュカードアプリです。かんたんに言うと、アカウントもトラッキングもなく、あなたのデータを受け取るサーバーもありません。カードと学習履歴は、あなたのiPhoneの中に保存されます。',
    sections: [
      {
        heading: '収集する情報',
        body: [
          'あなたを特定できる情報は収集しません。Hintoにはアカウントやログイン、アクセス解析、広告、トラッキングはありません。データを受け取るサーバーも運営しておらず、データを販売したり第三者と共有したりすることもありません。例外は、下に書いたクラッシュレポートだけです。',
        ],
      },
      {
        heading: 'iPhoneの中に保存されるもの',
        body: [
          'デッキ、カード、画像や録音、スキャン・読み込んだページ、学習履歴と連続記録、設定は、すべてあなたのiPhoneの中にだけ保存されます。',
          'iCloudバックアップを使っている場合は、そのバックアップに含まれます。バックアップはAppleのプライバシーポリシーのもとでAppleが管理しており、私たちが見ることはできません。',
        ],
      },
      {
        heading: 'カメラ・写真・マイク・通知',
        body: [
          'ページのスキャンにカメラを、カードの音声の録音にマイクを使います。写真はAppleの写真ピッカーで選ぶため、Hintoが見られるのはあなたが選んだ写真だけで、ライブラリ全体ではありません。通知は、毎日のリマインダーをオンにしたときだけ許可をお願いします。これらで取得したものは、iPhoneの中のアプリ内でのみ使われます。',
        ],
      },
      {
        heading: 'AIによるカード作成',
        body: [
          'Apple Intelligenceに対応したiPhoneでは、iPhone上のAppleのモデルでページを読み取れます。ページがiPhoneの外に出ることはありません。設定 → AIカード作成でオフにできます。',
          '使わない場合は、iPhone内のHinto独自のルールと辞書（JMdict）でカードを作ります。',
        ],
      },
      {
        heading: 'Hintoのデッキ（見つける）',
        body: [
          '「見つける」タブでは、Hintoのデッキの一覧、表紙の画像、入手したデッキをファイル配信サービス（Cloudflare R2）からダウンロードします。行うのはダウンロードだけで、あなたや学習についての情報は何もアップロードされず、リクエストにアカウントや識別子も含まれません。',
          '一般的なウェブサイトと同じく、配信サービスはファイルを送るときにiPhoneのIPアドレスを受け取ります。私たちがそれであなたを特定したり、ほかの情報と組み合わせたりすることはありません。Cloudflareは自社のプライバシーポリシーのもとでこれを扱います。',
        ],
      },
      {
        heading: 'iPhoneの外に出るもの（あなたが選んだときだけ）',
        body: [
          'デッキファイル：デッキを共有すると、送るファイルにはカード、画像と音声、作成者としての表示名が含まれます。学習履歴は含まれません。',
          'デバッグ情報：設定 → サポート → デバッグ情報を共有 で、アプリのバージョン、iPhoneの機種、クラッシュレポート、最近のアプリのログをまとめたファイルを作り、共有シートを開きます。カードの内容やデッキ名は含まれません。あなたが送ったときだけ送信されます。',
          'メール：設定 → サポート → お問い合わせ で、アプリのバージョン、iOSのバージョン、iPhoneの機種を記入したメールが開きます。私たちが受け取るのは送られた内容とメールアドレスで、返信のためだけに使います。',
        ],
      },
      {
        heading: 'クラッシュレポート',
        body: [
          'Hintoが強制終了したり固まったりすると、iOSが何が起きたかのレポートをアプリに渡します。Hintoはこのレポートを、あなたのiPhoneの中にだけ保存します。私たちに送られるのは、あなたが 設定 → サポート → デバッグ情報を共有 を選んだときだけです。',
          'これとは別に、iPhoneの設定（プライバシーとセキュリティ → 解析および改善）で「Appデベロッパと共有」をオンにしている場合、Appleが匿名のクラッシュレポートや利用状況の統計を私たちに共有することがあります。これはAppleのプライバシーポリシーのもとでAppleが収集するもので、あなたを特定する情報は含まれません。同じ場所でいつでもオフにできます。',
        ],
      },
      {
        heading: 'お子さまについて',
        body: ['Hintoは、お子さまを含め、どなたの個人情報も収集しません。'],
      },
      {
        heading: '変更について',
        body: [
          'たとえばデータを外部に送る機能が加わるなど、このポリシーを変更する場合は、そのバージョンのアプリを公開する前にこのページと日付を更新します。',
        ],
      },
      {
        heading: 'お問い合わせ',
        body: [`プライバシーに関するお問い合わせ：${contactEmail}`],
      },
    ],
  },
};
