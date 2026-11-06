import re

with open('Generative AI Landing.dc.html', 'r') as f:
    html = f.read()

# AMP Boilerplate
amp_html = """<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    <title>Advanced Generative AI Programme | AI Essentials</title>
    <link rel="canonical" href="https://genai.aiessentials.in/Generative%20AI%20Landing.dc.html">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet">
    <style amp-custom>
      body { margin: 0; background: #F9FAFC; font-family: 'Inter', sans-serif; color: #060814; }
      a { color: #1A22FF; text-decoration: none; }
      a:hover { color: #141AC7; }
      h1, h2, h3 { font-family: 'Sora', sans-serif; font-weight: 700; margin: 0; letter-spacing: -0.03em; }
      .container { max-width: 1240px; margin: 0 auto; padding: 80px 20px; }
      .hero { background: #050B36; color: #F9FAFC; }
      .badge { display: inline-block; padding: 6px 14px; border-radius: 99px; font-family: 'Sora', sans-serif; font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; background: rgba(255, 92, 0, 0.15); color: #FF5C00; margin-bottom: 16px; }
      .badge-brand { background: rgba(26, 34, 255, 0.1); color: #1A22FF; }
      .badge-dark { background: rgba(249, 250, 252, 0.1); color: rgba(249, 250, 252, 0.8); }
      .text-body { font-size: 1.0625rem; line-height: 1.65; color: #4A4F6A; }
      .hero .text-body { color: rgba(249,250,252,0.7); }
      .btn { display: inline-flex; justify-content: center; align-items: center; padding: 16px 28px; border-radius: 99px; font-family: 'Sora', sans-serif; font-weight: 600; font-size: 0.9375rem; cursor: pointer; border: none; text-decoration: none; text-align: center; }
      .btn-primary { background: #FF5C00; color: #FFFFFF; }
      .btn-outline { background: transparent; border: 1px solid currentColor; }
      .btn-dark { background: #050B36; color: #F9FAFC; }
      .flex-col { display: flex; flex-direction: column; gap: 24px; }
      .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
      .grid-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
      .card { background: #FFFFFF; border: 1px solid #E4E6F0; border-radius: 12px; padding: 28px; display: flex; flex-direction: column; gap: 12px; }
      .card-dark { background: rgba(249,250,252,0.03); border: 1px solid rgba(249,250,252,0.1); color: #F9FAFC; }
      .card-dark .text-body { color: rgba(249,250,252,0.7); }
      .card-title { font-family: 'Sora', sans-serif; font-size: 1.1875rem; font-weight: 700; margin: 0; }
      .card-code { font-family: 'Sora', sans-serif; font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.32em; color: #1A22FF; margin-bottom: 4px; }
      .card-dark .card-code { color: #FF5C00; }
      .section-light { background: #F0F2F8; border-top: 1px solid #E4E6F0; border-bottom: 1px solid #E4E6F0; }
      .price-card { background: #FFFFFF; border: 1px solid #E4E6F0; border-radius: 16px; padding: 40px; display: flex; flex-direction: column; gap: 24px; }
      .price-card.highlight { border-color: #1A22FF; box-shadow: 0 8px 32px rgba(26,34,255,0.08); }
      .price-eyebrow { font-family: 'Sora', sans-serif; font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #4A4F6A; }
      .price-amount { font-family: 'Sora', sans-serif; font-size: 3rem; font-weight: 700; color: #060814; letter-spacing: -0.04em; margin: 8px 0; }
      .price-anchor { font-size: 1.125rem; color: #8C90A8; text-decoration: line-through; }
      
      @media (max-width: 960px) {
        .grid-2 { grid-template-columns: 1fr !important; gap: 40px !important; }
        .container { padding: 48px 20px; }
        h1 { font-size: 2.5rem !important; }
        h2 { font-size: 2rem !important; }
      }
    </style>
  </head>
  <body>
"""

def replace_badge(m):
    text = m.group(1)
    return f'<div class="badge">{text}</div>'

def replace_section_label(m):
    code = m.group(1)
    text = m.group(2)
    return f'<div class="badge badge-brand">{code} — {text}</div>'

def replace_module_card(m):
    code, title, desc, dc_props = m.groups()
    return f'<div class="card"><div class="card-code">{code}</div><h3 class="card-title">{title}</h3><p class="text-body" style="margin:0;">{desc}</p></div>'

def replace_domain_card(m):
    code, title, desc = m.groups()
    return f'<div class="card" style="flex-direction:row; align-items:center; gap:20px; margin-bottom:12px;"><div class="card-code" style="margin:0;">{code}</div><div style="flex:1;"><h3 class="card-title" style="font-size:1rem;">{title}</h3><p class="text-body" style="margin:0; font-size:0.875rem;">{desc}</p></div></div>'

def replace_button(m):
    text = m.group(1)
    return f'<a href="#enroll" class="btn btn-primary">{text}</a>'
    
def replace_image(m):
    src = m.group(1)
    return f'<amp-img src="{src}" width="400" height="400" layout="responsive" style="border-radius:16px;"></amp-img>'

# Extract body content roughly
body_match = re.search(r'<!-- Hero -->(.*?)<!-- Pricing -->', html, re.DOTALL)
if body_match:
    content = body_match.group(1)
    
    # Very basic replacements for AMP (we will refine this with write_to_file)
    content = re.sub(r'<x-import[^>]*Badge[^>]*>(.*?)</x-import>', replace_badge, content)
    content = re.sub(r'<x-import[^>]*SectionLabel[^>]*code="(.*?)"[^>]*>(.*?)</x-import>', replace_section_label, content)
    content = re.sub(r'<x-import[^>]*ModuleCard[^>]*code="(.*?)"[^>]*title="(.*?)"[^>]*description="(.*?)"[^>]*dc-props="(.*?)"[^>]*></x-import>', replace_module_card, content)
    content = re.sub(r'<x-import[^>]*DomainCard[^>]*code="(.*?)"[^>]*title="(.*?)"[^>]*description="(.*?)"[^>]*></x-import>', replace_domain_card, content)
    content = re.sub(r'<x-import[^>]*Button[^>]*>(.*?)</x-import>', replace_button, content)
    content = re.sub(r'<image-slot[^>]*src="(.*?)"[^>]*></image-slot>', replace_image, content)
    
    # Remove script and x-dc tags
    content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<sc-if.*?>', '', content)
    content = re.sub(r'</sc-if>', '', content)
    
    amp_html += content
    amp_html += """
    <section id="enroll" class="container">
       <h2>Enroll Now</h2>
       <p class="text-body">To enroll in the Generative AI Programme, please contact us directly.</p>
       <a href="mailto:hello@aiessentials.in" class="btn btn-primary">Email Us</a>
    </section>
  </body>
</html>
"""
    
    with open('amp.html', 'w') as out:
        out.write(amp_html)
