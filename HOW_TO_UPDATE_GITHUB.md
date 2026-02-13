# How to get these updates onto GitHub

Your latest code is in this folder and in the bundle file. You **cannot push** to `Piterrocks-121/pin-portfolio` from this Mac because Git is logged in as **Yoko-pintu** and that account doesn’t have write access.

Use **one** of these options:

---

## Option 1: Repo owner (Piterrocks-121) applies the bundle (recommended)

1. **Copy the whole project folder** (or at least `pin-portfolio-updates.bundle` and this file) and send it to the person who owns **Piterrocks-121** (e.g. USB drive, cloud link, ZIP).

2. **On their machine**, they open a terminal in the folder that contains `pin-portfolio-updates.bundle` and run:

   ```bash
   git clone https://github.com/Piterrocks-121/pin-portfolio.git pin-portfolio-temp
   cd pin-portfolio-temp
   git pull ../pin-portfolio-updates.bundle main
   git push origin main
   cd ..
   rm -rf pin-portfolio-temp
   ```

   Or if they already have a clone of the repo:

   ```bash
   cd path/to/their/pin-portfolio-clone
   git pull /path/to/pin-portfolio-updates.bundle main
   git push origin main
   ```

3. After that, the live site https://piterrocks-121.github.io/pin-portfolio/ will update (may take 1–2 minutes).

---

## Option 2: You push as Piterrocks-121 on this Mac

1. In **GitHub Desktop**: sign out of Yoko-pintu, sign in as **Piterrocks-121**.
2. Add this repo: **File → Add Local Repository** → choose  
   ` /Users/ytiux/Desktop/Portp/pin-portfolio`
3. Click **Push origin**.

Or in **Terminal**:

```bash
gh auth login
```
(Choose GitHub.com, HTTPS, and log in as **Piterrocks-121**.)

Then:

```bash
cd /Users/ytiux/Desktop/Portp/pin-portfolio
git push origin main
```

---

## Option 3: You get write access as Yoko-pintu

1. **Piterrocks-121** adds **Yoko-pintu** as a collaborator:  
   https://github.com/Piterrocks-121/pin-portfolio/settings/access → **Add people** → Yoko-pintu (Write).
2. You accept the invite in your GitHub email.
3. Then on this Mac:

   ```bash
   cd /Users/ytiux/Desktop/Portp/pin-portfolio
   git push origin main
   ```

---

**Summary:** Your code is ready. The only blocker is **who is allowed to push** to `Piterrocks-121/pin-portfolio`. Use Option 1 if you can send the bundle to the owner; otherwise use Option 2 or 3.
