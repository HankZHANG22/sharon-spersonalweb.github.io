<template>
  <section class="page">
    <h1 class="title">Research & CV</h1>

    <div class="section">
      <h2 class="h2">Published Papers</h2>
      <ul class="list">
        <li v-for="(item, idx) in published" :key="'pub-' + idx" class="item">
          <div class="citation">{{ item.citation }}</div>

          <button
            v-if="item.file"
            class="btn"
            @click="openFile(item.file)"
            title="Open file"
          >
            Open File
          </button>

          <button
            v-else
            class="btn disabled"
            disabled
            title="File not provided"
          >
            No File
          </button>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="section">
      <h2 class="h2">Working Papers</h2>
      <ul class="list">
        <li v-for="(item, idx) in working" :key="'work-' + idx" class="item">
          <div class="citation">{{ item.citation }}</div>

          <button
            v-if="item.file"
            class="btn"
            @click="openFile(item.file)"
            title="Open file"
          >
            Open File
          </button>

          <button
            v-else
            class="btn disabled"
            disabled
            title="File not provided"
          >
            No File
          </button>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="section">
      <h2 class="h2">Conference Presentation Abstracts</h2>
      <ul class="list">
        <li v-for="(item, idx) in conference" :key="'conf-' + idx" class="item">
          <div class="citation">{{ item.citation }}</div>

          <button
            v-if="item.file"
            class="btn"
            @click="openFile(item.file)"
            title="Open file"
          >
            Open File
          </button>

          <button
            v-else
            class="btn disabled"
            disabled
            title="File not provided"
          >
            No File
          </button>
        </li>
      </ul>
    </div>

    <div class="divider" />

    <div class="section">
      <h2 class="h2">Papers in Progress</h2>
      <ul class="list">
        <li v-for="(item, idx) in progress" :key="'prog-' + idx" class="item">
          <div class="citation">{{ item.citation }}</div>

          <button
            v-if="item.file"
            class="btn"
            @click="openFile(item.file)"
            title="Open file"
          >
            Open File
          </button>

          <button
            v-else
            class="btn disabled"
            disabled
            title="File not provided"
          >
            No File
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
function openFile(path) {
  // 兼容中文/空格文件名
  const url = encodeURI(path)
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * ✅ 你的真实文件（已对齐你提供的文件名）：
 * public/Published papers/
 *   2 环球时报.pdf
 *   3 青年探索.pdf
 *   4 河海大学学报.pdf
 *   5 老龄科学研究.pdf
 *   6 中国人口报.pdf
 *   7 今日科苑.pdf
 *   8 科学发展.pdf
 *   9 中国发展.pdf
 *   10 城市观察.pdf
 *   中国银发经济报告2024 第八章.pdf
 */

const published = [
  {
    citation:
      'Hu, Zhan, Chen, Qian, & Luo, Xiaoman. (2025). Activating silver economy potential to alleviate mismatches between market supply and demand. 中国社会科学 (内部文稿), (5), 99–105.',
    // 你没提供对应 PDF 文件名，所以先留空（按钮显示 No File）
    file: null,
  },
  {
    citation:
      'Hu, Zhan, & Luo, Xiaoman. (March 4, 2025). Integrating family and community to explore new practices of Chinese-style eldercare. 环球时报.',
    file: '/Published papers/2 环球时报.pdf',
  },
  {
    citation:
      'Luo, Xiaoman, & Wu, Junhao. (2025). Planning and contradictions in Generation Z’s views on marriage and childbearing from a social media perspective. 青年探索, (6), 45–58.',
    file: '/Published papers/3 青年探索.pdf',
  },
  {
    citation:
      'Song, Liangjun, & Luo, Xiaoman. (2024). Deviations and corrective approaches in fertility support policies from the perspective of modernizing population governance. 河海大学学报 (哲学社会科学版), 26(5), 75–85.',
    file: '/Published papers/4 河海大学学报.pdf',
  },
  {
    citation:
      'Luo, Xiaoman. (2024). Evaluating the quality of embedded eldercare services: Evidence from Shanghai’s central urban districts. 老龄科学研究, 12(5), 66–78.',
    file: '/Published papers/5 老龄科学研究.pdf',
  },
  {
    citation:
      'Hu, Zhan, & Luo, Xiaoman. (October 26, 2023). Promoting age-friendly development by balancing “soft” and “hard” measures. 中国人口报.',
    file: '/Published papers/6 中国人口报.pdf',
  },
  {
    citation:
      'Luo, Xiaoman, & Hao, Yong. (2022). Lessons from Japan’s care support specialists for China’s eldercare consultant system. 今日科苑, (12), 60–72.',
    file: '/Published papers/7 今日科苑.pdf',
  },
  {
    citation:
      'Luo, Xiaoman, Zhong Yi, & Hao, Yong. (2022). Current Situation, Problems and Countermeasures of Shanghai Senior Care Advisory Service. 科学发展, 2022,(08):93-102.',
    file: '/Published papers/8 科学发展.pdf',
  },
  {
    citation:
      'Luo, Xiaoman, & Hao, Yong. (2021). Safeguarding mechanisms for health services in urban functional communities. 中国发展, 21(5), 3–13.',
    file: '/Published papers/9 中国发展.pdf',
  },
  {
    citation:
      'Hao, Yong, & Luo, Xiaoman*. (2021). A review of the development of Shanghai’s community-based embedded eldercare service model. 城市观察, (4), 125–135.',
    file: '/Published papers/10 城市观察.pdf',
  },
]

const working = [
  {
    citation: '“China Silver Economy Development Report 2024” (ed. Peng Xizhe), Author of Chapter 8.',
    // 你说这个文件也在 Published papers 文件夹下，所以直接指向它即可（不用移动）
    file: '/Published papers/中国银发经济报告2024 第八章.pdf',
  },
  {
    citation:
      '“Prominent Issues in Elderly Services and Policy Recommendations” (with Zhan Hu, etc.), Internal publication of the Development Research Center of the Shanghai Municipal People’s Government, March 2024.',
    file: null,
  },
]

const conference = [
  {
    citation:
      'Luo, Xiaoman. (October, 2025). Theoretical reflections and governance possibilities of community “Shilao”: A Gemeinschaft perspective. IARU-ALH Annual Conference: Digital Transformation and Aging Welfare.',
    file: null,
  },
  {
    citation:
      'Luo, Xiaoman. (July, 2025). Accessibility of public sports facilities and age-friendly spatial planning in Shanghai from an active healthy aging perspective. Population Association of China Annual Meeting 2025.',
    file: null,
  },
  {
    citation:
      'Luo, Xiaoman. (July, 2024). A computational analysis of Weibo texts on Generation Z’s attitudes toward marriage and childbearing. Population Association of China Annual Meeting 2024.',
    file: null,
  },
  {
    citation:
      'Luo, Xiaoman. (September, 2023). Evaluation of the quality of home- and community-based eldercare service provision based on the fuzzy comprehensive evaluation method. The 10th China Gerontology Graduate Student Forum.',
    file: null,
  },
]

const progress = [
  {
    citation:
      'Hu, Zhan, & Luo, Xiaoman*. Theoretical reflections on age-friendly communities and their governance possibilities: A Gemeinschaft perspective. 武汉大学学报 (哲学社会科学版). In press, scheduled for 2026, Issue 01.',
    file: null,
  },
  {
    citation:
      'Chen, Lin, Luo, Xiaoman*, & Qian, Jun. Returning home as “failure”? undergraduates’ intentions to return to their hometowns from a social network theory perspective. 青年研究. Submitted.',
    file: null,
  },
  {
    citation:
      'Luo, Xiaoman, & Shichao, Du. “Reverse age-friendliness”: Online discursive practices of “early retirement” among young people in China. Based on a completed provincial level research report (~15,000 words), manuscript preparation.',
    file: null,
  },
  {
    citation:
      'Luo, Xiaoman, & Chen, Lin. Community age-friendliness for the oldest-old (80+): Evidence from qualitative interviews. Two rounds of fieldwork completed; qualitative interview data collected from 15 older adults aged 80+, manuscript preparation.',
    file: null,
  },
]
</script>

<style scoped>
.page {
  padding: 6px 0 10px;
}

.title {
  margin: 0 0 14px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.h2 {
  margin: 0 0 10px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.25px;
  color: var(--text);
}

.section {
  margin: 18px 0;
}

.divider {
  height: 1px;
  background: var(--border);
  margin: 18px 0;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: start;
  padding: 10px 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
}

.citation {
  font-size: 15px;
  color: var(--text);
}

.btn {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(26, 92, 255, 0.25);
  background: rgba(26, 92, 255, 0.10);
  cursor: pointer;
  white-space: nowrap;
}

.btn:hover {
  border-color: rgba(26, 92, 255, 0.45);
  background: rgba(26, 92, 255, 0.14);
}

.btn.disabled {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.45);
  cursor: not-allowed;
}

@media (max-width: 720px) {
  .item {
    grid-template-columns: 1fr;
  }
  .btn {
    width: fit-content;
  }
}
</style>
