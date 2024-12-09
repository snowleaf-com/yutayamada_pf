<template>
  <v-container px-5 mb-15 fruid dull-height>
    <v-row justify="center" align-content="center">
      <v-col cols="12" sm="10" md="10" lg="10">
        <h1 class="text-center font1">Works</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12" sm="12" md="6" lg="6" xl="4"
      >
        <v-card
          class="mx-auto mb-3"
          max-width="600"
          shaped
        >
        <v-hover v-slot:default="{ hover }">
          <v-img
            height="200px"
            contain
            :src="item.src"
          >
            <v-expand-transition>
              <v-card
                v-if="hover && item.link"
                height="100%"
                width="100%"
                class="d-flex transition-fast-in-fast-out v-card--reveal font1 white--text"
                :href="item.link"
                target="_blank"
                rel="noopener">
                Go to Site
              </v-card>
            </v-expand-transition>
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey darken-4"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-hover>
          <v-card-title class="center font1">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle class="pb-0 font1" align="right">
            <v-btn
              v-if="item.isGitHub"
              class=""
              icon
              target="_blank"
              rel="noopener"
              :href="item.github"
            >
              <v-icon size="22px">mdi-github</v-icon>
            </v-btn>
<!--            <v-btn-->
<!--              class="mr-2"-->
<!--              icon-->
<!--              target="_blank"-->
<!--              rel="noopener"-->
<!--            >-->
<!--              <v-icon size="20px">mdi-book-open-page-variant</v-icon>-->
<!--            </v-btn>-->
            <!-- <span class="bottom">{{ item.date }}</span> -->
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div class="text-height text-content">{{ item.comment }}</div>
          </v-card-text>

          <v-card-actions>
            <v-chip
              text-color="white"
              class="mr-2 text-content" v-for="(tag,i) in item.tags"
              :key="i"
              :color="tag.color"
            >

              {{ tag.value }}
            </v-chip>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'ゆうあい鍼灸接骨院ホームページ',
            comment: `鍼灸接骨院の総合的なブランディングおよびホームページ制作を担当しました。
            予算的な制限からNode.jsが使えないために、バックエンドにPHPを使用してAPIやお問い合わせフォームを実装し、ユーザーが簡単に予約や問い合わせができるようにしました。
            `,
            src: require('@/assets/images/ss_yuai.jpg'),
            link: 'https://yuai-aoc.com',
            github: 'https://github.com/snowleaf-com/yuai-aoc',
            isGitHub: true,
            date: '2024/07',
            tags: [
              {
                color: '#000000',
                value: 'Next.js 14',
              },
              {
                color: '#007ACC',
                value: 'TypeScript',
              },
              {
                color: '#4F5D95',
                value: 'PHP 8',
              },
            ]
          },
          {
            title: 'タイピングゲーム',
            comment: 'ユーザーが楽しみながらタイピングスキルを向上できるアプリケーションを作成しました。特にリアルタイムのタイピング入力処理の難易度が高く、Vue.jsを活用してスムーズなUXを提供しました。Laravelとの非同期通信も行い、パフォーマンスの向上に努めました。',
            src: require('@/assets/images/ss9.png'),
            link: 'https://snow-leaf.com/typinggame/',
            github: 'https://github.com/snowleaf-com/typinggame',
            isGitHub: true,
            date: '2021/11',
            tags: [
              {
                color: '#FF2D20',
                value: 'Laravel 6',
              },
              {
                color: '#41B883',
                value: 'Vue.js 2',
              },
              {
                color: '#563D7C',
                value: 'BootStrap',
              },
            ]
          },
          {
            title: 'ポートフォリオ',
            comment: '現在閲覧されている、当サイトです。Vue.js、Vuetifyを用いて制作しました。',
            src: require('@/assets/images/ss1.png'),
            link: 'https://portfolio.snow-leaf.com',
            github: 'https://github.com/snowleaf-com/yutayamada_pf',
            isGitHub: true,
            date: '2021/10',
            tags: [
              {
                color: '#41B883',
                value: 'Vue.js',
              },
              {
                color: '#41B883',
                value: 'Vue Router',
              },
              {
                color: '#41B883',
                value: 'VueCLI',
              },
              {
                color: '#1867C0',
                value: 'Vuetify',
              },
            ]
          },
          {
            title: 'ブログ',
            comment: 'WordPressを用いた勉強の備忘録ブログです。',
            src: require('@/assets/images/ss_blog.png'),
            link: 'https://snow-leaf.com',
            github: '',
            isGitHub: false,
            date: '2021/01',
            tags: [
              {
                color: '#21759B',
                value: 'WordPress',
              },
              {
                color: '#4F5D95',
                value: 'PHP',
              },
            ]
          },
          {
            title: 'フリマサイト',
            comment: '純粋なPHPとJavaScriptを用いて、ユーザーが簡単に商品を出品・購入できるフリマサイトを開発しました。アップロード、プレビュー、確認画面での画像使い回し処理に苦労しましたが、JavaScriptを駆使してユーザーが直感的に操作できるUIを構築しました。また、PHPでバックエンド処理を組み込み、データの保存やバリデーションを効率化しました。',
            src: require('@/assets/images/ss4.png'),
            link: 'https://snow-leaf.com/toy_reuse/',
            github: 'https://github.com/snowleaf-com/toyreuse_testapp',
            isGitHub: true,
            date: '2022/04',
            tags: [
              {
                color: '#4F5D95',
                value: 'PHP',
              },
              {
                color: '#F7DF1E',
                value: 'JavaScript',
              },
            ]
          },
          {
            title: '計算サイト',
            comment: '庭作業の片手間でやれるように、スマホファーストでシンプルな計算サイトを心がけて開発しました。JavaScriptのみでクライアントサイドの処理を完結させ、処理のスピードや保守性を重視しました。',
            src: require('@/assets/images/ss_garden.png'),
            link: 'https://garden.snow-leaf.com/',
            github: 'https://github.com/snowleaf-com/lawn_calc',
            isGitHub: true,
            date: '2023/05',
            tags: [
              {
                color: '#F7DF1E',
                value: 'JavaScript',
              },
            ]
          },
          {
            title: '計算アプリ（iOSアプリ）',
            comment: '計算サイトのiOS向けを開発しました。金銭面の都合でApp Storeへの公開は行っていませんが、Xcodeを用いて動作確認を実施しています。',
            src: require('@/assets/images/ss12.png'),
            link: 'https://snow-leaf.com/programming/smartphone_app/',
            github: '',
            isGitHub: false,
            date: '2020/03',
            tags: [
              {
                color: '#61DAFB',
                value: 'ReactNative',
              },
              {
                color: '#000020',
                value: 'Expo',
              },
            ]
          },
        ]
      }
    }
  }
</script>


<style scoped>
  .text-height {
    min-height: 50px;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    background-color: rgba(17, 17, 17, 0.6);
    position: absolute;
    width: 100%;
  }
  .bottom {
    vertical-align: middle;
  }
  .center {
    justify-content: center;
  }
</style>