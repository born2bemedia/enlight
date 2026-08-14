export const ASSESSMENT_TITLE = "CRYPTO MARKETING HEALTH SCORE";

export const ASSESSMENT_STEPS = [
  {
    id: "community",
    title: "COMMUNITY PRESENCE",
    questions: [
      {
        id: "platforms",
        label: "Which social platforms are actively managed?",
        type: "checkbox",
        options: [
          { value: "twitter", label: "X/Twitter", score: 1.25 },
          { value: "telegram", label: "Telegram", score: 1.25 },
          { value: "discord", label: "Discord", score: 1.25 },
          { value: "linkedin", label: "LinkedIn", score: 1.25 },
          { value: "youtube", label: "YouTube", score: 1.25 },
          { value: "reddit", label: "Reddit", score: 1.25 },
          { value: "instagram", label: "Instagram", score: 1.25 },
          { value: "tiktok", label: "TikTok", score: 1.25 },
        ],
        maxScore: 10,
      },
      {
        id: "followers",
        label: "Total followers across all platforms",
        type: "radio",
        options: [
          { value: "0-500", label: "0 - 500", score: 2 },
          { value: "501-5000", label: "501 - 5,000", score: 4 },
          { value: "5001-20000", label: "5,001 - 20,000", score: 6 },
          { value: "20001-100000", label: "20,001 - 100,000", score: 8 },
          { value: "100000+", label: "100,000+", score: 10 },
        ],
        maxScore: 10,
      },
    ],
  },
  {
    id: "content",
    title: "CONTENT & ENGAGEMENT",
    questions: [
      {
        id: "publishFrequency",
        label: "How often do you publish content?",
        type: "radio",
        options: [
          { value: "randomly", label: "Randomly", score: 2 },
          { value: "monthly", label: "Once per month", score: 4 },
          { value: "2-3-month", label: "2-3 times per month", score: 6 },
          { value: "2-3-week", label: "2-3 times per week", score: 8 },
          { value: "daily", label: "Daily", score: 10 },
        ],
        maxScore: 7,
      },
      {
        id: "contentFormats",
        label: "Which content formats do you regularly use?",
        type: "checkbox",
        options: [
          { value: "text", label: "Text posts", score: 1.67 },
          { value: "images", label: "Images", score: 1.67 },
          { value: "videos", label: "Videos", score: 1.67 },
          { value: "short-video", label: "Short-form video", score: 1.67 },
          { value: "articles", label: "Articles", score: 1.67 },
          { value: "newsletters", label: "Newsletters", score: 1.67 },
        ],
        maxScore: 7,
      },
      {
        id: "engagement",
        label: "How do you engage with your audience?",
        type: "checkbox",
        options: [
          { value: "post-only", label: "Post only", score: 2 },
          { value: "reply-comments", label: "Reply to comments", score: 5 },
          {
            value: "reply-messages",
            label: "Reply to comments and messages",
            score: 7,
          },
          {
            value: "active-chats",
            label: "Actively manage chats/channels",
            score: 10,
          },
        ],
        maxScore: 6,
        scoreMode: "max",
      },
    ],
  },
  {
    id: "visibility",
    title: "VISIBILITY & DISCOVERABILITY",
    questions: [
      {
        id: "websiteUpdates",
        label: "How often do you update your website?",
        type: "radio",
        options: [
          { value: "never", label: "Never", score: 1 },
          { value: "rarely", label: "Rarely", score: 3 },
          { value: "when-needed", label: "When needed", score: 6 },
          { value: "regularly", label: "Regularly", score: 10 },
        ],
        maxScore: 10,
      },
      {
        id: "organicTraffic",
        label: "Monthly organic traffic",
        type: "radio",
        options: [
          { value: "0-500", label: "0 - 500", score: 2 },
          { value: "501-5000", label: "501 - 5,000", score: 4 },
          { value: "5001-20000", label: "5,001 - 20,000", score: 6 },
          { value: "20001-100000", label: "20,001 - 100,000", score: 8 },
          { value: "100000+", label: "100,000+", score: 10 },
        ],
        maxScore: 10,
      },
    ],
  },
  {
    id: "advertising",
    title: "ADVERTISING & PROMOTION",
    questions: [
      {
        id: "channels",
        label: "Which marketing channels do you use?",
        type: "checkbox",
        options: [
          { value: "paid-search", label: "Paid Search", score: 1.67 },
          { value: "paid-social", label: "Paid Social", score: 1.67 },
          { value: "guest-posting", label: "Guest Posting", score: 1.67 },
          {
            value: "influencer",
            label: "Influencer Marketing",
            score: 1.67,
          },
          { value: "pr", label: "PR Campaigns", score: 1.67 },
          {
            value: "messenger",
            label: "Messenger Advertising",
            score: 1.67,
          },
        ],
        maxScore: 10,
      },
      {
        id: "campaignFrequency",
        label: "How often do you launch campaigns?",
        type: "radio",
        options: [
          { value: "never", label: "Never", score: 1 },
          { value: "occasionally", label: "Occasionally", score: 3 },
          { value: "quarterly", label: "Quarterly", score: 5 },
          { value: "monthly", label: "Monthly", score: 8 },
          { value: "continuously", label: "Continuously", score: 10 },
        ],
        maxScore: 10,
      },
    ],
  },
  {
    id: "operations",
    title: "MARKETING OPERATIONS",
    questions: [
      {
        id: "brandManager",
        label: "Do you have an in-house brand manager?",
        type: "radio",
        options: [
          { value: "no", label: "No", score: 1 },
          { value: "part-time", label: "Part-time", score: 5 },
          { value: "full-time", label: "Full-time", score: 10 },
        ],
        maxScore: 7,
      },
      {
        id: "marketingTeam",
        label: "Do you have an in-house marketing team?",
        type: "radio",
        options: [
          { value: "no", label: "No", score: 1 },
          { value: "1", label: "1 person", score: 4 },
          { value: "2-4", label: "2-4 people", score: 7 },
          { value: "5+", label: "5+ people", score: 10 },
        ],
        maxScore: 7,
      },
      {
        id: "budget",
        label: "Monthly marketing budget",
        type: "radio",
        options: [
          { value: "under-1000", label: "Under €1,000", score: 2 },
          { value: "1000-5000", label: "€1,000 - €5,000", score: 4 },
          { value: "5001-20000", label: "€5,001 - €20,000", score: 6 },
          { value: "20001-100000", label: "€20,001 - €100,000", score: 8 },
          { value: "100000+", label: "€100,000+", score: 10 },
        ],
        maxScore: 6,
      },
    ],
  },
];

const CATEGORY_LABELS = {
  community: "Community",
  content: "Content",
  visibility: "Visibility",
  advertising: "Advertising",
  operations: "Operations",
};

const RISK_LEVELS = [
  {
    max: 25,
    label: "Critical Risk",
    description:
      "Your project has limited visibility, weak audience engagement and low marketing consistency.",
    risks: [
      "Low discoverability",
      "Weak community growth",
      "Limited trust",
      "Poor conversion potential",
    ],
  },
  {
    max: 50,
    label: "High Risk",
    description:
      "Your marketing foundation exists but key channels and operations need stronger consistency.",
    risks: [
      "Inconsistent audience growth",
      "Limited content reach",
      "Underdeveloped visibility",
      "Missed conversion opportunities",
    ],
  },
  {
    max: 75,
    label: "Moderate Risk",
    description:
      "Your project shows solid marketing activity with room to optimise community, visibility and paid growth.",
    risks: [
      "Uneven channel performance",
      "Scaling bottlenecks",
      "Opportunity gaps in engagement",
    ],
  },
  {
    max: 100,
    label: "Healthy",
    description:
      "Your project demonstrates strong marketing performance across community, content and operations.",
    risks: ["Maintaining momentum", "Staying ahead of market shifts"],
  },
];

const HELP_ITEMS = [
  "Marketing strategy development",
  "Community building",
  "Search visibility improvement",
  "Reputation management",
  "Brand positioning",
];

function scoreQuestion(question, answer) {
  if (!answer || (Array.isArray(answer) && answer.length === 0)) {
    return 0;
  }

  if (question.type === "radio") {
    const selected = question.options.find((option) => option.value === answer);
    return Math.min(selected?.score ?? 0, question.maxScore);
  }

  const selectedOptions = question.options.filter((option) =>
    answer.includes(option.value)
  );

  if (question.scoreMode === "max") {
    const maxScore = Math.max(...selectedOptions.map((option) => option.score), 0);
    return Math.min(maxScore, question.maxScore);
  }

  const sum = selectedOptions.reduce((total, option) => total + option.score, 0);
  return Math.min(sum, question.maxScore);
}

export function calculateAssessmentResults(answers) {
  const categories = ASSESSMENT_STEPS.map((step) => {
    const rawScore = step.questions.reduce(
      (total, question) => total + scoreQuestion(question, answers[question.id]),
      0
    );

    return {
      id: step.id,
      label: CATEGORY_LABELS[step.id],
      score: Math.round(rawScore),
      maxScore: 20,
    };
  });

  const totalScore = categories.reduce((total, category) => total + category.score, 0);
  const risk =
    RISK_LEVELS.find((level) => totalScore <= level.max) ??
    RISK_LEVELS[RISK_LEVELS.length - 1];

  return {
    totalScore,
    categories,
    riskLabel: risk.label,
    description: risk.description,
    risks: risk.risks,
    helpItems: HELP_ITEMS,
  };
}

export function createEmptyAnswers() {
  return ASSESSMENT_STEPS.reduce((accumulator, step) => {
    step.questions.forEach((question) => {
      accumulator[question.id] = question.type === "checkbox" ? [] : "";
    });
    return accumulator;
  }, {});
}
