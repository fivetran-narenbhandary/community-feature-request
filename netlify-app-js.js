const taxonomyData = {
  "Connector Requests": {
    "New Connector Request": {
      fields: [{ label: "Which application or service?", required: true }]
    },
    "Existing Connector Improvement": {
      "New Table / Column": {
        fields: [
          { label: "Connector name", required: true },
          { label: "Table name", required: true },
          { label: "Column to add", required: true },
          { label: "API documentation link", required: false }
        ]
      },
      "Performance": { fields: [{ label: "Which connector?", required: true }] },
      "Configuration / Setup": { fields: [{ label: "Which connector?", required: true }] },
      "Other": { fields: [{ label: "Which connector?", required: true }] }
    }
  },
  "Destination Requests": {
    "New Destination Request": {
      "Cloud Data Warehouse": { fields: [{ label: "Which data warehouse?", required: true }] },
      "Data Lake": { fields: [{ label: "Which data lake?", required: true }] },
      "Database Destination": { fields: [{ label: "Which database?", required: true }] },
      "Streaming Service": { fields: [{ label: "Which streaming platform?", required: true }] }
    },
    "Existing Destination Improvement": {
      "Data Loading/Performance": { fields: [{ label: "Which destination?", required: true }] },
      "Configuration/Features": { fields: [{ label: "Which destination?", required: true }] },
      "Data Type/Schema Handling": { fields: [{ label: "Which destination?", required: true }] }
    }
  },
  "Data Activation / Reverse ETL (Census)": {
    "Connectors": {
      "New Destination": { fields: [{ label: "Which business application?", required: true }] },
      "Destination Improvement": { fields: [{ label: "Which rETL destination?", required: true }] },
      "Source Support": { fields: [{ label: "Which data warehouse/database?", required: true }] }
    },
    "Platform Features": {
      "Reverse ETL": { fields: [], help: "Requests related to how syncs are configured, scheduled, or triggered" },
      "Datasets": { fields: [], help: "Requests related to the creation or management of datasets" },
      "Audience Hub": { fields: [], help: "Requests related to building audiences or segments from warehouse data" }
    }
  },
  "Data Transformation & Orchestration": {
    "Transformations": {
      "dbt Integration": { fields: [], help: "Requests related to dbt Core integration, packages, or features" },
      "SQL Transformations": { fields: [], help: "Requests for SQL-based transformation capabilities" },
      "Transformation Performance": { fields: [], help: "Issues or requests related to transformation speed or reliability" },
      "Pre-built Transformations": { fields: [], help: "Requests for new pre-built transformation packages or templates" }
    },
    "Orchestration & Scheduling": {
      "Sync Scheduling": { fields: [], help: "Requests for scheduling flexibility, frequency options, or timing controls" },
      "Dependency Management": { fields: [], help: "Requests for managing dependencies between connectors, transformations, or syncs" },
      "Workflow Automation": { fields: [], help: "Requests for automated workflows, triggers, or conditional logic" }
    }
  },
  "Platform & User Experience": {
    "Dashboard & Navigation": {
      "UI/UX Improvements": { fields: [], help: "Requests for dashboard layout, navigation, or visual improvements" },
      "Account Overview": { fields: [], help: "Requests related to the account overview dashboard and metrics" },
      "Connector/Sync Dashboard": { fields: [], help: "Requests for connector or sync status dashboard improvements" }
    },
    "Pipeline Configuration": { fields: [], help: "Requests for advanced pipeline features like row filtering, column blocking, relationship mapping" },
    "Bulk Operations": { fields: [], help: "Requests for bulk editing, pausing, or managing multiple connectors" },
    "Account & User Management": {
      "Multi-Account Management": { fields: [], help: "Requests for managing multiple Fivetran accounts or organizations" }
    },
    "Support Experience": { fields: [], help: "Requests related to the Support Experience" }
  },
  "Monitoring & Observability": {
    "Logs & Debugging": {
      "Log Access/Search": { fields: [], help: "Requests for improved log access, search, or filtering capabilities" },
      "Error Messages/Diagnostics": { fields: [], help: "Requests for clearer error messages or diagnostic information" },
      "Historical Logs": { fields: [], help: "Requests for longer log retention or historical log access" }
    },
    "Alerts & Notifications": { fields: [], help: "Requests for customizing when and how you receive alerts" },
    "Performance Monitoring": {
      "Sync Performance Metrics": { fields: [], help: "Requests for metrics on sync speed, throughput, or performance" },
      "Resource Usage": { fields: [], help: "Requests for visibility into credits, compute, or resource consumption" },
      "Data Quality Monitoring": { fields: [], help: "Requests for data quality checks, validation, or monitoring" }
    }
  },
  "Developer Tools & APIs": {
    "Fivetran API": { fields: [], help: "Requests for new REST API endpoints or capabilities, documentation improvements, or API performance/reliability" },
    "SDKs": { fields: [], help: "Requests related to Connector SDK for building custom connectors or Partner SDK for integrations" }
  },
  "Networking, Security & Compliance": {
    "Network Connectivity": { fields: [], help: "Requests related to VPN Tunnels, Private Networking, Proxy Agent Support, SSH Connections, Hybrid Deployment, or TLS Configuration" },
    "Security & Access Controls": { fields: [], help: "Requests related to Encryption, Column-level Security, Authentication, SSO / SCIM, or RBAC" },
    "Compliance & Governance": { fields: [], help: "Requests related to Compliance certifications, Data Residency, or Data Governance" }
  },
  "HVR (Self-Hosted Deployment)": {
    "HVR Channel Requests": {
      "Capture": { fields: [{ label: "Which database system?", required: true }] },
      "Refresh": { fields: [{ label: "Which database system?", required: true }] },
      "Integration": { fields: [{ label: "Which database system?", required: true }] },
      "Location": { fields: [{ label: "Which database system?", required: true }] }
    },
    "HVR Management & Configuration": {
      "Data Transformation": { fields: [], help: "Requests for HVR-specific data transformation or mapping features" },
      "HVR Administration": { fields: [], help: "Requests for HVR admin tools, configuration, or management features" },
      "HVR Monitoring": { fields: [], help: "Requests for HVR-specific monitoring, logging, or observability" }
    }
  },
  "Pricing, Billing & Licensing": {
    "Pricing Model": {
      "Credit/Usage-Based Pricing": { fields: [], help: "Requests or questions about credit consumption or usage-based pricing" },
      "Connector Pricing": { fields: [], help: "Requests about specific connector pricing or connector tiers" },
      "Custom Pricing": { fields: [], help: "Requests for enterprise or custom pricing arrangements" }
    },
    "Billing Features": {
      "Invoice/Billing Portal": { fields: [], help: "Requests to improve billing portal, invoice access, or payment methods" },
      "Budgets/Alerts": { fields: [], help: "Requests for budget controls, spending alerts, or cost management" }
    },
    "Self-Service Purchasing": { fields: [], help: "Requests to improve self-service buying, renewal, or upgrade experience" }
  },
  "Other": { fields: [], help: "Please provide as much detail as possible about your request. Our team will review and assign this to the appropriate product manager." }
};

const isLeafNode = (obj) => obj && (Array.isArray(obj.fields) || typeof obj.help === 'string');

function FeatureRequestForm() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selections, setSelections] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [animating, setAnimating] = React.useState(false);

  const getCurrentOptions = () => {
    let current = taxonomyData;
    for (const sel of selections) {
      current = current[sel];
      if (isLeafNode(current)) return null;
    }
    return current ? Object.keys(current) : null;
  };

  const getCurrentData = () => {
    let current = taxonomyData;
    for (const sel of selections) {
      current = current[sel];
    }
    return isLeafNode(current) ? current : null;
  };

  const options = getCurrentOptions();
  const currentData = getCurrentData();
  const fields = currentData?.fields || [];
  const helpText = currentData?.help || '';
  const isComplete = !options || isLeafNode(getCurrentData());

  const handleSelect = (option) => {
    setAnimating(true);
    setTimeout(() => {
      const newSelections = [...selections, option];
      setSelections(newSelections);
      
      let current = taxonomyData;
      for (const sel of newSelections) {
        current = current[sel];
      }
      
      if (isLeafNode(current)) {
        setIsOpen(false);
        if (current.fields?.length > 0) {
          const template = current.fields.map(f => `${f.label}: `).join('\n\n') + '\n\nAdditional details:\n';
          setDetails(template);
        } else {
          setDetails('');
        }
      }
      setAnimating(false);
    }, 150);
  };

  const handleBack = (e) => {
    e.stopPropagation();
    if (selections.length > 0) {
      setAnimating(true);
      setTimeout(() => {
        setSelections(selections.slice(0, -1));
        setAnimating(false);
      }, 150);
    }
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setSelections([]);
    setDetails('');
    setIsOpen(false);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">What is your feature request about?</h2>

      <div className="form-group">
        <label className="form-label">
          Request Type <span className="required-mark">*</span>
        </label>
        
        <div className="dropdown-container">
          <div
            className={`dropdown-trigger ${isOpen || selections.length ? 'active' : ''}`}
            onClick={() => {
              if (!isOpen && isComplete && selections.length > 0) {
                setSelections(selections.slice(0, -1));
              }
              setIsOpen(!isOpen);
            }}
          >
            <div className="dropdown-selections">
              {selections.length === 0 ? (
                <span className="dropdown-placeholder">Select a category...</span>
              ) : (
                selections.map((sel, idx) => (
                  <span key={idx} className="dropdown-selection-item">
                    <span className="dropdown-selection-text">{sel}</span>
                    {idx < selections.length - 1 && (
                      <span className="dropdown-arrow-separator">→</span>
                    )}
                  </span>
                ))
              )}
            </div>
            <div className="dropdown-controls">
              {selections.length > 0 && (
                <span className="dropdown-clear" onClick={handleClear}>×</span>
              )}
              <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
          </div>

          {isOpen && options && (
            <div className="dropdown-panel">
              {selections.length > 0 && (
                <div className="dropdown-header">
                  <button type="button" className="dropdown-back-btn" onClick={handleBack}>
                    ← Back
                  </button>
                  <span className="dropdown-current-level">{selections[selections.length - 1]}</span>
                </div>
              )}
              
              <div className={`dropdown-options ${animating ? 'animating' : ''}`}>
                {options.map((option) => (
                  <div
                    key={option}
                    className="dropdown-option"
                    onClick={() => handleSelect(option)}
                  >
                    <span>{option}</span>
                    <span className="dropdown-option-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {helpText && fields.length === 0 && (
        <p className="help-text">{helpText}</p>
      )}

      <div className="form-group">
        <label className="form-label">
          Title <span className="required-mark">*</span>
        </label>
        <input
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a brief title for your request"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Details</label>
        <div className="textarea-container">
          <div className="textarea-toolbar">
            <button type="button" className="toolbar-btn">T</button>
            <button type="button" className="toolbar-btn bold">B</button>
            <button type="button" className="toolbar-btn italic">I</button>
          </div>
          <textarea
            className="textarea-input"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Describe your feature request in detail..."
            rows={8}
          />
        </div>
      </div>

      <button
        type="button"
        className="submit-btn"
        onClick={() => alert('Form submitted!')}
      >
        Submit Post
      </button>
    </div>
  );
}

ReactDOM.render(<FeatureRequestForm />, document.getElementById('root'));
