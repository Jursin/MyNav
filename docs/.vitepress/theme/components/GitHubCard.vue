<template>
  <div class="github-card" :class="{ loading, error }">
    <div v-if="loading" class="loading-spinner">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div v-else-if="error" class="error-message">
      <i class="fas fa-exclamation-triangle"></i> {{ error }}
    </div>
    <div v-else class="card-content">
      <div class="header">
        <img :src="repoData.owner.avatar_url" class="avatar" alt="avatar">
        <div class="repo-info">
          <h3>
            <a :href="repoData.html_url" target="_blank">
              {{ repoData.full_name }}
            </a>
          </h3>
          <p class="description">{{ repoData.description }}</p>
        </div>
      </div>
      
      <div class="stats">
        <div class="stat-item">
          <i class="fas fa-star"></i>
          <span>星标 {{ repoData.stargazers_count }}</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-code-branch"></i>
          <span>复刻 {{ repoData.forks_count }}</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-eye"></i>
          <span>关注 {{ repoData.watchers_count }}</span>
        </div>
        <div class="stat-item" v-if="repoData.license">
          <i class="fas fa-balance-scale"></i>
          <span>{{ repoData.license.spdx_id }}</span>
        </div>
      </div>
      
      <div class="footer">
        <span class="language" v-if="repoData.language">
          <span class="language-color" :style="{ backgroundColor: getLanguageColor(repoData.language) }"></span>
          {{ repoData.language }}
        </span>
        <div class="dates" :class="{ 'no-language': !repoData.language }">
          <span class="created">
            <i class="fas fa-calendar-plus"></i>
            创建于 {{ formatDate(repoData.created_at) }}
          </span>
          <span class="updated">
            <i class="fas fa-clock"></i>
            更新于 {{ formatDate(repoData.updated_at) }}
          </span>
          <span class="branch">
            <i class="fas fa-code-branch"></i>
            默认分支：{{ repoData.default_branch }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    owner: { type: String, required: true },
    repo: { type: String, required: true }
  },
  data() {
    return {
      repoData: null,
      loading: true,
      error: null,
      languageColors: {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'Java': '#b07219',
        'Go': '#00ADD8',
        'Ruby': '#701516',
        'PHP': '#4F5D95',
        'C++': '#f34b7d',
        'C': '#555555',
        'C#': '#178600',
        'Shell': '#89e051',
        'Markdown': '#083FA1',
        'MDX': '#FCB32C'
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${this.owner}/${this.repo}`
      )
      if (!response.ok) throw new Error('Failed to fetch repository data')
      this.repoData = await response.json()
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString()
    },
    getLanguageColor(language) {
      return this.languageColors[language] || '#ccc'
    }
  }
}
</script>

<style scoped>
.github-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 800px;
}

.loading-spinner, .error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.error-message {
  color: var(--vp-c-red);
}

.header {
  display: flex;
  margin-bottom: 12px;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 12px;
}

.repo-info h3 {
  margin: 0;
  font-size: 20px;
}

.repo-info h3 a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.repo-info h3 a:hover {
  text-decoration: underline;
}

.description {
  margin: 4px 0 0;
  color: var(--vp-c-text-2);
  font-size: 16px;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin: 16px 8px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--vp-c-text-2);
}

.stat-item i {
  margin-right: 4px;
  color: var(--vp-c-text-3);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 16px;
}

.language {
  display: flex;
  align-items: center;
}

.dates {
  display: flex;
  align-items: center;
  gap: 16px;
}

.dates.no-language {
  margin-left: auto;
}

.branch {
  display: flex;
  align-items: center;
  gap: 4px;
}

.language-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 4px;
}

.fas {
  font-size: 16px;
}
</style>
