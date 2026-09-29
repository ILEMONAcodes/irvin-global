# Irvin Global Digital Loan Management Platform

## Product Proposal and Prototype Overview

**Status:** Proposed customer-facing website and loan-servicing application

**Current delivery:** Interactive frontend prototype

**Intended organization:** Irvin Global Financial Services

**Primary audience:** Borrowers, prospective applicants, and Irvin Global operations teams

## Executive Summary

This project proposes a unified digital experience through which Irvin Global customers can discover available credit facilities, submit loan applications, and manage their accounts throughout the life of a loan. The public website introduces the company and its services. The authenticated customer area is intended to provide a clear view of applications, loan balances, repayment schedules, payments, documents, notifications, and support.

The goal is to make everyday loan servicing easier for customers and to provide the foundation for more consistent, traceable loan operations for the company. Customers should be able to understand what they are applying for, see the status of a request, know what they owe and when it is due, and reach the right support channel without needing to rely exclusively on in-person or manual follow-up.

The application in this repository is a **prototype of the proposed experience**, not a production lending platform. It demonstrates navigation, responsive layouts, sample account screens, theme preferences, and selected interactions. It is not connected to a loan origination system, customer database, payment processor, identity-verification provider, notification service, or other production backend. No displayed sample balance, repayment, application, or customer record is live financial data.

## Why This Product Is Proposed

Loan journeys involve several connected activities: understanding products, completing an application, providing information for review, receiving a decision, accessing facility documents, making repayments, and getting help when something changes. If these activities are presented across disconnected channels, customers may have difficulty finding accurate information and staff may spend time answering routine status questions or reconciling records.

A coherent digital loan-management experience could help Irvin Global:

- Give prospective borrowers a clear overview of personal and business facilities.
- Explain application steps and product-specific requirements before a customer begins.
- Make loan estimates and repayment dates easier to find.
- Give customers a single place to follow applications and manage active facilities.
- Make payment activity and downloadable account documents easier to access.
- Provide direct support pathways for repayment, application, and account questions.
- Give authorized staff a structured operational view of applications and servicing tasks.
- Establish a foundation for secure integrations with the company’s existing systems.

These are product objectives, not claims that the current prototype already delivers those outcomes operationally.

## Proposed Product Scope

### 1. Public Website

The public experience is intended to help visitors understand Irvin Global and decide what to do next. Its proposed content includes:

- A responsive landing page with a persistent primary navigation bar.
- Overview information about the company and its approach to customer financing.
- Product discovery for personal and business loan facilities.
- A repayment estimator clearly marked as illustrative until rates and fees are supplied by an authoritative system.
- An explanation of the application journey and the information a customer may need.
- Frequently asked questions and clear contact options.
- Branch information for customers who prefer in-person assistance.
- A consistent light and dark appearance preference across supported pages.

### 2. Customer Loan Portal

The proposed customer portal organizes account servicing into separate, understandable areas:

- **Overview:** account summary, active facility, next repayment, repayment progress, recent applications, and configurable dashboard widgets.
- **My Loans:** facility details, original principal, outstanding balance, status, repayment schedule, payment history, and associated documents.
- **Payments:** upcoming obligations, past activity, payment instructions, and eventually a secure payment journey.
- **Documents:** facility offers, agreements, repayment schedules, and other customer-specific records.
- **Notifications:** application and repayment updates with customer notification preferences.
- **Support:** contact methods and a structured way to direct questions to the appropriate team.
- **Settings:** profile and presentation preferences, with additional account controls to be defined.

Customers should be able to navigate these areas independently and see the same underlying facility data wherever the account is summarized.

### 3. Staff Operations (Future Scope)

An operational workspace for authorized company staff is a potential later phase. Depending on Irvin Global’s existing processes, it could support application review queues, document verification, decision recording, disbursement tracking, repayment monitoring, customer communications, and audit review. This staff functionality requires separate role design, access controls, operational requirements, and backend services; the customer-facing prototype alone does not provide it.

## Current Prototype

The current repository is a Next.js App Router frontend implemented with React, TypeScript, Tailwind CSS, Lucide icons, and Framer Motion. It is intended for design review, workflow discussion, and early usability feedback.

The prototype currently demonstrates:

- Public navigation and responsive landing-page sections for product discovery, company information, features, application steps, FAQs, and lead contact.
- A loan estimate interaction that updates its displayed estimate as the amount and repayment period change.
- Loan product cards and an application form flow.
- A prototype login flow that can open a sample dashboard without backend authentication.
- A responsive dashboard with a locally remembered theme and dashboard-widget preferences.
- Separate customer-facing routes for overview, loans, payments, documents, support, settings, and application status.
- Sample facility values shared across overview, loan, and payment screens so those views remain internally consistent.
- Branch search and map presentation.

The screens may show illustrative values such as a sample SME facility. These values exist to make the interface reviewable; they must not be interpreted as a customer statement, approved offer, live available-credit decision, or payment instruction.

### Prototype Boundaries

The prototype does not currently provide:

- Real account creation, authentication, session management, or password recovery.
- A customer, loan, application, or document database.
- Loan origination, eligibility decisions, underwriting, or credit-bureau checks.
- Identity verification, BVN/NIN validation, or secure KYC document handling.
- Real-time balances, repayment schedules, or application status from company systems.
- Payment initiation, card/bank processing, reconciliation, or receipts.
- Delivery of email/SMS/push notifications.
- Production support-ticket creation or staff case management.
- Production audit logs, role-based access controls, or administrative permissions.

Some prototype actions are deliberately local or illustrative. For example, preference settings are stored in the browser, support and lead forms open a prefilled email draft, and the payment action explains that payment processing is not connected. These behaviors must be replaced or explicitly approved before any production use.

## Proposed Customer Journeys

### Discover and Apply

1. A visitor reviews the available personal or business facilities.
2. The visitor uses an estimate tool as an illustration, not as an offer.
3. The visitor selects a facility and starts an application.
4. The production system explains required information and captures it securely.
5. The customer receives a reference and can follow the review process.
6. If approved, the customer reviews the final offer and accepts it through an authorized flow.

### Manage an Active Facility

1. The customer signs in through a secure authentication service.
2. The overview summarizes the customer’s actual facilities and upcoming obligations.
3. My Loans displays the authoritative principal, outstanding balance, terms, and schedule.
4. Payments displays payment instructions and a reconciled transaction history.
5. Documents provides access only to records the signed-in customer is permitted to view.
6. Notifications and Support help the customer respond to important account events.

### Staff Review (Future)

1. An authorized staff member opens an application assigned to their role or queue.
2. The staff member reviews submitted information and verified documents.
3. Any request for clarification is recorded and communicated through approved channels.
4. Decisions, offers, and disbursement events are recorded with an audit trail.
5. Customer-facing status and account information update from the authoritative system.

The details of these workflows, approval authority, and service levels must be confirmed with Irvin Global before implementation.

## Data Consistency and Financial Presentation

Financial figures should come from one authoritative facility record rather than being independently typed into multiple screens. The prototype follows this principle for its sample facility by sharing the facility data across Overview, My Loans, and Payments.

In production, the source of truth should be an approved loan-management or core banking system. The web application should not calculate or invent authoritative balances from presentation-layer assumptions. Each financial value should have a defined meaning, currency, effective timestamp, and source. In particular:

- **Original principal** is the amount disbursed under the facility.
- **Outstanding balance** is the amount still due under the current account state and may include components defined by the contract and servicing system.
- **Next repayment** is the next amount and date supplied by the servicing schedule.
- **Amount repaid and progress** should be derived from reconciled transactions and the agreed repayment schedule.
- **Available credit** should only be displayed when an authoritative eligibility or limit source defines it. It must not be inferred from original principal minus outstanding balance unless that is the company’s approved rule.
- **Estimates** must be clearly distinguished from approved rates, offers, and contractual schedules.

## Design and Accessibility Principles

The intended visual system uses Irvin Global blue as the primary action color, supported by white surfaces, soft slate backgrounds, restrained shadows, and clear typography. The customer workspace can use denser layouts than the public pages, while retaining predictable navigation and legible data presentation.

The product should:

- Adapt navigation, forms, tables, cards, and charts to mobile, tablet, and desktop layouts.
- Support a persistent light/dark preference across the public site and customer portal.
- Preserve visible focus states and keyboard access for navigation and controls.
- Use labels, semantic headings, accessible names, and status text that does not rely on color alone.
- Respect reduced-motion preferences for transitions and reveal animations.
- Keep currency, dates, and number formatting consistent across all account views.
- Avoid unsupported claims such as guaranteed approval, instant disbursement, fixed rates, or regulatory status unless approved and verifiable.

## Proposed Production Architecture

The current frontend can be a presentation layer for future services, but production integrations should be designed with Irvin Global’s technical and operational teams. A possible high-level architecture is:

1. **Web client:** Next.js customer website and portal, with accessible responsive components.
2. **Application API:** authenticated endpoints for customer profiles, applications, facilities, schedules, documents, support, and preferences.
3. **Identity and access:** a secure identity provider or company-approved authentication service, with session controls, recovery, MFA policy, and role management.
4. **Loan system integration:** approved APIs or controlled adapters to the loan origination and servicing systems that own application decisions and account balances.
5. **Payment integration:** a compliant payment provider or bank channel, with idempotent payment requests, webhook verification, reconciliation, receipts, and failure handling.
6. **Document storage:** private, encrypted storage with authorization checks, malware scanning, retention rules, and time-limited access where appropriate.
7. **Notifications:** approved email, SMS, or push providers, with consent, delivery status, templates, and opt-out controls.
8. **Operational monitoring:** structured logs, metrics, alerts, incident response, backup, and recovery procedures.

These are proposed building blocks, not an assertion about Irvin Global’s current infrastructure. System selection and integration boundaries should follow discovery with the company.

## Security, Privacy, and Governance

Loan applications can involve sensitive identity, employment, financial, and contact information. Before collecting real customer data, the production solution should undergo security, privacy, legal, compliance, and operational review. At minimum, the implementation plan should define:

- Data minimization: collect only fields required for an approved business purpose.
- Encryption in transit and at rest, with managed keys and rotation practices.
- Authentication, authorization, secure session handling, MFA policy, and account recovery.
- Role-based staff permissions, segregation of duties, and least-privilege access.
- Audit trails for sensitive reads, updates, approvals, payment events, and document access.
- Input validation, rate limiting, abuse prevention, dependency review, and security testing.
- Consent, privacy notices, retention schedules, deletion processes, and breach response.
- Secure handling of KYC identifiers and documents; never expose them in client logs or URLs.
- Payment security controls, provider responsibilities, reconciliation, and dispute handling.
- Compliance review against applicable Nigerian financial-services, data-protection, and consumer-protection requirements.

This proposal is not legal or regulatory advice. Irvin Global’s qualified legal, compliance, security, and risk teams must approve all production policies and customer-facing claims.

## Delivery Roadmap

### Phase 1: Prototype Review

- Validate public-site information architecture and brand direction.
- Review customer dashboard terminology and sample scenarios with business stakeholders.
- Conduct usability sessions on mobile and desktop.
- Confirm authoritative definitions for facility balances, available credit, repayment progress, and application statuses.

### Phase 2: Requirements and Service Design

- Map borrower and staff processes, exceptions, and service ownership.
- Define product eligibility, application fields, document requirements, and status transitions.
- Select identity, loan-system, payment, storage, and notification integration strategies.
- Complete privacy impact, threat modeling, and regulatory review.
- Define API contracts, data ownership, audit needs, retention, and service-level objectives.

### Phase 3: Secure Customer MVP

- Implement production identity and account recovery.
- Connect customer profiles and application submission to approved backend services.
- Display authoritative facility and repayment data.
- Deliver secure document access and status updates.
- Integrate an approved payment flow with reconciliation and support procedures.
- Add observability, operational runbooks, accessibility review, and security testing.

### Phase 4: Staff Operations and Expansion

- Add role-protected review and servicing workflows where required.
- Automate notifications and operational queues based on approved business rules.
- Add reporting, service metrics, and customer feedback loops.
- Expand product coverage and integrations incrementally, with controlled rollout and monitoring.

## Running the Prototype

### Requirements

- Node.js version supported by the installed Next.js release.
- npm.

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The prototype does not require backend credentials. Do not enter real customer data into prototype forms.

### Validation Commands

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
  app/                 Public pages, customer portal routes, and layouts
  components/          Shared navigation, dashboard, and calculator UI
  data/                Prototype records and shared sample account values
  hooks/               Reusable client-side hooks
  lib/                 Formatting, theme, and application utilities
  types/               Shared TypeScript types
public/                Brand assets and static files
```

## Decisions Needed from Irvin Global

Before production planning, the company should confirm:

- Which personal and business products are in scope for the first release.
- The authoritative systems for customer, application, facility, and payment data.
- Whether existing channels or vendors must be retained or integrated.
- The real meaning and calculation of available credit and repayment progress.
- Required authentication factors, customer recovery paths, and staff roles.
- Approved KYC fields, document types, retention periods, and verification providers.
- Payment channels, reconciliation ownership, and the customer receipt process.
- Notification consent, message content, and support service hours.
- Privacy, accessibility, security, regulatory, and launch approval owners.
- Hosting, availability, backup, incident response, and ongoing support expectations.

## Proposal Disclaimer

This repository describes and demonstrates a **proposed website and software application for managing customer loan journeys and servicing**. It is not a production loan-management system, does not make lending decisions, and is not connected to Irvin Global’s authoritative customer or financial systems. All prototype accounts, balances, applications, schedules, and actions are illustrative until replaced by verified production integrations and approved operating procedures.