export const projects = [
  {
    id: 1,
    slug: 'automated-invoice-processing',
    title: 'Automated Invoice Processing',
    category: 'Workflow Automation',
    image: '/images/invoice.png',
    short_desc: 'Completely eliminated manual data entry by extracting, validating, and syncing invoice data into accounting software automatically.',
    challenge: 'Our client was spending over 20 hours a week manually downloading PDF invoices from emails, typing the data into their ERP, and chasing down approvals. Human error was causing late payments and damaged vendor relationships.',
    solution: 'We engineered an intelligent, zero-touch workflow. Incoming emails are now parsed instantly. AI extracts line-item data with perfect accuracy, automatically routes it to the correct department for a one-click approval, and syncs directly to their accounting ledger.',
    results: [
      { metric: '100%', label: 'Manual Entry Eliminated' },
      { metric: '20hrs', label: 'Saved Every Week' },
      { metric: '0', label: 'Late Payment Fees' }
    ]
  },
  {
    id: 2,
    slug: 'lead-generation-crm-sync',
    title: 'Lead Generation & CRM Sync',
    category: 'API Integration',
    image: '/images/leads.png',
    short_desc: 'Connected fragmented marketing channels into a unified CRM pipeline with zero manual handoffs and instant notifications.',
    challenge: 'Leads were coming in from Facebook Ads, website forms, and third-party affiliates. The sales team was manually exporting CSVs and importing them into Salesforce, causing a 24-hour delay in lead response time—which killed conversion rates.',
    solution: 'We built a robust API bridge that captures leads the millisecond they are generated. The data is enriched, deduplicated, and instantly pushed into Salesforce. The exact sales rep is immediately pinged on Slack with the lead\'s full context.',
    results: [
      { metric: '< 1s', label: 'Lead Response Time' },
      { metric: '+40%', label: 'Conversion Rate' },
      { metric: '100%', label: 'Data Accuracy' }
    ]
  },
  {
    id: 3,
    slug: 'multi-level-approval-workflow',
    title: 'Multi-level Approval Workflow',
    category: 'Power Apps & PCF',
    image: '/images/multi-level.png',
    short_desc: 'Replaced a chaotic email-based approval chain with a sleek, centralized dashboard for real-time decision making.',
    challenge: 'Capital expenditure requests were getting buried in long email threads. Managers had no visibility into where requests were bottlenecked, and compliance auditing was a nightmare of searching through Outlook histories.',
    solution: 'We deployed a custom Power App integrated seamlessly into Microsoft Teams. Employees submit requests via a clean interface, and the system automatically routes it through the complex, dynamic hierarchy of approvers based on the budget amount.',
    results: [
      { metric: '3 Days', label: 'Faster Approvals' },
      { metric: '100%', label: 'Audit Compliance' },
      { metric: '0', label: 'Lost Requests' }
    ]
  },
  {
    id: 4,
    slug: 'custom-partner-platform',
    title: 'Custom Partner Platform',
    category: 'Web Development',
    image: '/images/platform.png',
    short_desc: 'Designed and developed a highly secure, lightning-fast portal for B2B partners to access resources and track commissions.',
    challenge: 'The client’s B2B partners were relying on outdated SharePoint folders and monthly email reports to track their sales commissions and download marketing assets. The experience was frustrating and felt unprofessional.',
    solution: 'We built a bespoke, modern web application using React and Next.js. The platform features an ultra-fast, glassmorphism UI, real-time commission dashboards pulled via API, and a highly secure, role-based asset library.',
    results: [
      { metric: '85%', label: 'Partner Adoption' },
      { metric: 'Zero', label: 'Support Tickets' },
      { metric: 'Real-time', label: 'Data Sync' }
    ]
  },
  {
    id: 5,
    slug: 'shopify-ecommerce-sync',
    title: 'Shopify E-commerce Sync',
    category: 'API Integration',
    image: '/images/shopify.png',
    short_desc: 'Synchronized Shopify inventory, fulfillment, and customer data with a legacy warehouse management system.',
    challenge: 'During high-volume sales events, the warehouse was manually printing Shopify orders and updating inventory levels at the end of the day. This led to massive overselling and furious customers waiting for refunds.',
    solution: 'We engineered a bi-directional sync that listens to Shopify webhooks in real-time. The moment an order is placed, it is pushed to the warehouse system, and inventory is universally decremented across all sales channels instantly.',
    results: [
      { metric: '0', label: 'Oversold Items' },
      { metric: 'Instant', label: 'Fulfillment Routing' },
      { metric: '100%', label: 'Automated' }
    ]
  },
  {
    id: 6,
    slug: 'task-management-dashboard',
    title: 'Task Management Dashboard',
    category: 'Web Development',
    image: '/images/task.png',
    short_desc: 'Consolidated Jira, Asana, and Trello into a single, unified executive dashboard for high-level portfolio tracking.',
    challenge: 'The executive team had zero visibility into company-wide progress because different departments were entrenched in different project management tools. Compiling a weekly status report took a full day of executive time.',
    solution: 'We built a custom, centralized "Mission Control" dashboard. Utilizing the APIs of Jira, Asana, and Trello, we normalized the data into a single, beautiful interface that gives executives real-time, high-level metrics on every ongoing initiative.',
    results: [
      { metric: '1 Day', label: 'Saved Per Week' },
      { metric: '100%', label: 'Cross-tool Visibility' },
      { metric: 'Real-time', label: 'Executive Reporting' }
    ]
  }
];
