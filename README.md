# Pharos
git checkout main
echo "<!-- redeploy trigger -->" >> README.md
git add README.md
git commit -m "chore: force redeploy"
git push
