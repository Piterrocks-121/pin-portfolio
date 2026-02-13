# How to push your changes to GitHub

Your local repo has **2 commits** that are not yet on GitHub. Follow one of the methods below to push so https://piterrocks-121.github.io/pin-portfolio/ updates.

---

## Option A: Push from Terminal (recommended)

1. Open **Terminal** (not Cursor’s terminal).

2. Go to the project:
   ```bash
   cd /Users/ytiux/Desktop/Portp/pin-portfolio
   ```

3. Push (use the same method you use for GitHub):

   **If you use SSH (keys):**
   ```bash
   git push origin main
   ```

   **If you use HTTPS and GitHub asks for a password:**  
   Use a **Personal Access Token (PAT)** instead of your GitHub password:
   - GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic).
   - Enable scope: **repo**.
   - Copy the token, then when `git push` asks for a password, paste the token.

   ```bash
   git push origin main
   ```

4. Wait 1–2 minutes, then refresh: https://piterrocks-121.github.io/pin-portfolio/

---

## Option B: Push using GitHub Desktop

1. Open **GitHub Desktop** and open the repository: `/Users/ytiux/Desktop/Portp/pin-portfolio`.
2. You should see 2 commits to push.
3. Click **Push origin**.
4. Refresh the site after the push.

---

## What was fixed locally

- **Image filename:** `Multi Agent.png` was renamed to `MultiAgent.png` so the image works reliably on GitHub Pages.
- **HTML:** `index.html` now references `MultiAgent.png`.
- All your project card updates (Multi-Agent AI Safety Monitoring System, description, tags, link, order) are in the commits.

Once the push succeeds, the live site will show these updates.
