# Contributing to Payventory

Thank you for your interest in contributing to **Payventory**! We welcome contributions from developers of all skill levels. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📑 Table of Contents
1. [Before You Start](#-before-you-start)
2. [How to Report a Bug](#-how-to-report-a-bug)
3. [How to Suggest a Feature](#-how-to-suggest-a-feature)
4. [Setting Up the Development Environment](#-setting-up-the-development-environment)
5. [The "Fork & Pull Request" Model](#-the-fork--pull-request-model)
6. [Making a Good Pull Request](#-making-a-good-pull-request)
7. [Testing and Merging](#-testing-and-merging)
8. [First Contribution Guide](#-first-contribution-guide)

---

## 🚦 Before You Start
Before you open an issue or pull request, please ensure the following:
- **License**: You agree to contribute your code under the **Apache 2.0 License**.
- **No Duplicates**: Search the [GitHub Issues](https://github.com/Avirup1705/Autonomous_Agentic_payment_system/issues) to ensure no one else is already working on or has reported your problem.
- **Bug Verification**: If fixing a bug, verify it still exists on the latest `main` branch. We do not fix bugs for deprecated versions.
- **Questions?**: If you have a question about using the software, please do **NOT** open an issue. Use our [Discussions](https://github.com/Avirup1705/Autonomous_Agentic_payment_system/discussions) page or community forum.

---

## 🐛 How to Report a Bug
Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.yml).
- Provide a clear and concise description.
- Include reproduction steps and environment details (Node.js/Python versions).
- Attach relevant logs or screenshots.

## 💡 How to Suggest a Feature
Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.yml).
- Describe the problem it solves and the intended benefit.
- Propose a potential implementation or architectural change.

---

## 🛠️ Setting Up the Development Environment
1. **Prerequisites**: Node.js v18+, Python v3.10+, MongoDB.
2. **Clone**: `git clone https://github.com/YOUR_USERNAME/Autonomous_Agentic_payment_system.git`
3. **Backend**: `cd src/backend && npm install && cp ../../.env.example .env`
4. **ML Engine**: `pip install -r requirements.txt` (from root).
5. **Frontend**: `cd src/frontend/Autonomous_Agentic_payment_system && npm install`.

---

## 🔄 The "Fork & Pull Request" Model
1. **Fork** the repository and **Clone** it locally.
2. **Create a Branch**: Use a meaningful name from the `main` branch.
   - `feature/description`, `bugfix/description`, `docs/description`.
3. **Coding Style**: Follow [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript) for JS and [PEP 8](https://peps.python.org/pep-0008/) for Python.
4. **Local Testing**:
   - Run the Backend and ML Engine locally.
   - Add new tests in the `/tests` directory for any new logic.
5. **Push**: `git push origin branch-name`.
6. **Pull Request**: Open a PR from your branch to our `main`.

---

## 🏆 Making a Good Pull Request
Following these guidelines increases the likelihood of your PR being accepted:
- **Scope**: Keep each PR focused on **one issue**. If you want to solve multiple problems, submit separate PRs.
- **No "Oops" Commits**: Squash minor fixups into the relevant logical commits before submitting.
- **Documentation**: Update `README.md`, `ROADMAP.md`, or the `/docs` folder if you add new features.
- **Meaningful Titles**: Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`, `docs:`).

---

## 🧪 Testing and Merging
1. **CI Status**: Your PR will trigger GitHub Actions. Ensure all builders are **green**.
2. **Review**: A maintainer will review your code. Please respond to feedback within a reasonable timeframe (usually 1-2 weeks).
3. **Approval**: Once the code is "green" and approved (👍 or 🚀), it will be merged.
4. **Credits**: Significant contributions will be credited in the [CHANGELOG.md](CHANGELOG.md) and release notes.

---

## 🐣 First Contribution Guide
Newcomers are encouraged to look for the [**good first issue**](https://github.com/Avirup1705/Autonomous_Agentic_payment_system/labels/good%20first%20issue) label. 
- These tasks are scoped for easy onboarding.
- Feel free to ask for clarification directly in the issue!
