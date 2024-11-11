<template>
  <div class="app-container">
    <el-form labelPosition="top" :inline="false" :model="detail" label-width="80px">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        style="position:fixed;top:50px;">
        <el-menu-item v-for="(item, index) in items" :index="item.id" :key="index" @click="scrollTo(item)">
          {{ item.title }}
        </el-menu-item>
      </el-menu>
      <div class="content" @scroll="onScroll" style="margin-left: 100px;">
        <div id="tab_base">
          <h2>基本信息</h2>
          <p></p>
        </div>
        <div id="tab_symptom">
          <h2 @click="showValue(detail.symptom_other)">症状</h2>
          <fieldset>
            <el-form-item label=" ">
              <el-input v-model="setting.symptom" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.symptom" :values="setting.symptom" :other.sync="detail.symptom_other" max="10" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_general" @click.native="radioClick($event)">
          <h2>一般状况</h2>
          <fieldset>
            <el-form-item label="体温" style="width: 120px">
              <el-input v-model="detail.body_temperature">
                <template slot="append">℃</template>
              </el-input>
            </el-form-item>
            <el-form-item label="脉率" style="width: 150px">
              <el-input v-model="detail.pulse_rate">
                <template slot="append">次/分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item label="呼吸频率" style="width: 150px">
              <el-input v-model="detail.lung_rr">
                <template slot="append">次/分钟</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="血压（左侧）" style="width: 250px;">
              <el-input v-model="detail.left_sbp" style="width: 80px" />/<el-input v-model="detail.left_dbp" style="width: 150px">
                <template slot="append">mmHg</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血压（右侧）" style="width: 250px;">
              <el-input v-model="detail.right_sbp" style="width: 80px" />/<el-input v-model="detail.right_dbp" style="width: 150px">
                <template slot="append">mmHg</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="身高" style="width: 130px;">
              <el-input v-model="detail.body_height">
                <template slot="append">CM</template>
              </el-input>
            </el-form-item>
            <el-form-item label="体重" style="width: 130px">
              <el-input v-model="detail.body_weight">
                <template slot="append">KG</template>
              </el-input>
            </el-form-item>
            <el-form-item label="腰围" style="width: 130px">
              <el-input v-model="detail.body_waistline">
                <template slot="append">CM</template>
              </el-input>
            </el-form-item>
            <el-form-item label="体质指数（BMI）" style="width: 140px">
              <el-input v-model="detail.body_bmi">
                <template slot="append">kg/㎡</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item  label="老年人健康状态自我评估*">
              <CheckBoxAuto :value.sync="detail.health_status" :values="'1.满意|2.基本满意|3.说不清楚|4.不太满意|5.不满意'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item  label="老年人生活自理能力自我评估*">
               <CheckBoxAuto :value.sync="detail.selfcare" :values="'1.可自理（0～3分）|2.轻度依赖（4～8分）|3.中度依赖（9～18分）|4.不能自理（≥19分）'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item  label="老年人认知功能*">
              <CheckBoxAuto :value.sync="detail.cognition" :values="'1.粗筛阴性|2.粗筛阳性'"></CheckBoxAuto>
              <el-input v-model="detail.cognition_score" style="width: 160px">
                <template slot="prepend">智力评分</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item  label="老年人情感状态*">
              <CheckBoxAuto :value.sync="detail.affection" :values="'1.粗筛阴性|2.粗筛阳性'"></CheckBoxAuto>
              <el-input v-model="detail.affection_score" style="width: 170px">
                <template slot="prepend">抑郁评分</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACUAQEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivNdZ+MOm+HviRN4Y1W0eCzjSMG/3ZCuyhhlcfcwwGexB4x0APSqKbHIksayRuro4DKynIIPQg06gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArwD9o7w6qnSvEkKYLE2dwR36tGf/AEMZ+le/1xnxX0ldY+GOuQkLvgtzdIxHQxfOce5CkfjQxp6nn/7PnjS4voLrwrfStIbWLz7NmOSI8gMmfQEqR7E9gK9SvvHPhnTvEMGg3esW8epTkKsOScMTgKxAwpPYEivjbQ77VLDVYm0e6ltryb9wkkTbW+f5cZ7da7fS/BiW3xx07w3Df/2iba7jlup2XaHKASyjqfQrz3pXKcdT6zooopkBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAVdSnuLXS7u4tLb7TcxQu8MAOPNcKSq57ZOB+NeQ+Dfj1a3t2NM8XWqaXdhyn2lAREGHGHU5KHPGeR64r2ivOfiL8I9L8bI17alLDWgOLgL8k3tIB1/3hyPfpQNW6nokUsc0SSxOskbqGR1OQwPQg9xTq+PPDnjvxN8OdbexjvRcWltMY57IzCWB8H5thGQp91/HPSvr63nS6tYriPOyVA67hg4IyMikmDViWiiimIKKKKACiiigAooooAK8u+IviW+1zUT8PPCyiXU71NuoXB5S0gYfMGPqQefQEAckY6D4keMj4P8NeZaJ5ur3r/ZtPgA3FpT/Ft7gfqSB3pPhz4JHhDQ2e8YT65fN5+oXRO5nkJJ257gZP1OT3oGu58f3NvPpuoTQtuSa2mMZI4Kupx/MV7l+z1ok9/qus+Lb5pJpSTbxyyHcXkc75WJPOfu8/7Rrzr4ux2MXxT11dPVRF5ys+w5BlKKZPx3ls++aZZfE3X9K8FweGdJkjsIEMhluYBiaXcxP3v4cZxkc8dak0eqPscMrZwQcHBwehpa8d/Z70jV7Pw5qWpag8gs9RlR7WORiSSu4PJg/wB7KjPfb9K9iqjNqwUUU2SRIo2eR1RFGSzHAAoEOorF1bxh4c0MD+09bsLZmUOqPOu9lIyCFHJH4Vyt18cPAVsxVdXkuCOvk2sn8yoFAHolFeXJ8fvBDOAZNQUH+I23A/I12nh3xl4e8WRu2iapBdMgy8Yysij1KMAwHvjFAWN2iiigAooooAKKKKACiiigArC8X+K7HwZ4em1jUEmkiRlRY4QCzseg54H1rdqhrWjWHiHR7nStTgE9pcLtdDx7gg9iCAQfUUAeDaj+0lfuxGmeHraJezXM7SE/goXH51UW8+K3xaj8uFf7O0eUYZkBt4GU9fmOXkHsMiqvi/4B69pEslx4ff8AtWyHKxkhZ0HoR0b6jk+grlNP8RePPhzdRR79S09eGFreRt5Tj/cbj8RzUl2XQ948F/BDw94ZeK81E/2tqKYYNMuIoz6qnc+7E/QV6hXlfgD426T4pli07V400zVXwqZb9zM3opPKk/3T+BJr1SqJd+oUUUUCCiiqOs6xY6BpFzqupziCztl3SSEZxzgAAdSSQAPU0AXqK4Pwj8XfC/jLVv7LsWu7a8YExR3car5uBk7SrEZxzg4Nb3jXVr/Q/Bmranplubi9t4C8SBd2D03Y7hQSx+lAWNK+1bTdMMQ1DULW0MrBI/tEyx729BkjJq5XyNoXgPxl8Tjea5NM7qEYrdXrH9+4zhI/bPHGFH6VreCPize6H4I17RdQuneWG0b+y3ckujsQmwew3bgOwU+wpXK5TvvD7r8RvjTqGuSYl0fw2ogslzlWlyQH9+Q7Z9krvfiB4xg8D+E59WkjMk7N5FtHjh5WBK59AACT7D1rn/gbop0n4Z2kzoVl1CV7pgwwcE7V/AqoP411XjDwjpvjbQm0nVDMsPmLKkkLAOjjOCMgjoSOR0JoE9z4ou7qe+vJ7y6laW4nkaWWRursxySfqTXT/Dfwc3jbxlbaa+RZxjz7tgcERKRkD3JIX2zntWt8R7zwxplpa+D/AAvCtxBp87TXOpSYaSaYjBUMAPlAwDjglR6ZOR4H13xXpdxeWPhGKR72+RQ7QW4llVFz93IO0fNyfpyKRp00PsGa50zQNMTz57WwsbdAiGR1jRFAwAM8cCvPde+PPg/SC8Vk9xqs68YtkxHn3dsce4BrhdO+CHjDxTdLqHjHXGgLdVklNzPj067VH0Jx6V6h4d+EPgzw4FePSkvrlf8Alvf4mOfUKRtH1ABpmdkebn4o/Evxqxj8JeHTaQMcCdIvNx7GWQCMfkKVPg1488VMJvFniry0Y5MLSvcFf+A5CD8DX0AqhFCqAFAwABwBS0WC/Y8k039nnwlahTe3Wo3r/wAQaVY0P4KMj866CL4NeAIVwvh6NvUvcTMf1eu7ophdnGR/CbwJHHLGvhu1IlXaxZnYgexLZU+4wa8o1nwrpngD40+E4fDF3cLJeXKG4tWbf5MTOFIDdSpXfwckbc5OePSPiP8AFbTPA9s1rb+Xe606/u7YNlYvRpMdB7dT7da5v4UeC9Xv9bl+IPixnfUroE2kci4KqRjzCO3y/Ko7D8KQ1fqezUUUUyQooooAKKKKACiiigAoork/FnxH8NeDlKajfCS8x8tlbfvJj6ZH8P1YigDrKjnt4LqFobiGOaJvvJIoZT9Qa8sPiv4oeJYTP4e8KW2lWbEbJNTf964P8QUkYGOeh9iaSXwh8WNQVJLrx1aWsgXmO1gwoP1Crmgdin8QvgXYa0smo+F1h0/UOWe1+7BN/ugfcb6cfTk1l/Cr4l6lp2sr4J8YeZHOjeRazXAxIj9onJ6g/wAJ+g5BGNKbRPjR4db7TZa9Za7EvJt5Qu5v++lX9HzXn/xE8Vad4u04nW9HuNC8Y6eFABjOy5TPKHPKkZLDORwRk5pFb6H1NWVrviTRvDVtFcazqENnFK/lo0h+83sBz/hXN/Cbxe/jDwNb3N0++/tWNrdMersoBD/ipB+ua4T432F14s8ceFvCenhRdvDNMGc/KA3c+wETGmSlrY9xhmiuYEnglSWKRQySIwZWB6EEdRWb4h8O6f4n01dO1RHktPOSVo1baJNpyFb1X1FeOfATxBqlnq+qeCNURl+yK80aSN80Lq4V4x6gls8dMH1rqfhzrV54s8eeLteWeU6PG8dlZpuzG2zOWHvjDf8AbSkFrHN/HHQYvD1xonjXRoY7W8tbpIZPKUKGIG6MkD02FfcEDtXeeNPifo3g3RbC/kSS8l1BBJa28RALJgHcSeg5Hr1+tUPjksTfCjUzIpLLLAYz6N5qjP5FvzryX4cabP8AE7xzp82sRK2maDp8EJjAO1hGNsan/ebc59cEUD3Wp9M2c4ubG3uBG0QljVwjDlcjOD9K+LfGun/ZviHrtjBEFA1KZYo17AudoH4EV9s18q+LY4bX9o0C4AWD+17SSTd02ny2JPtg0MIn0/plhDpGj2enwn9xZ26QIW/uooUZ/AV4J8W/jJ9sE3h3wvckW5yl3fRn/WdikZ/u+rd+g469l8dZfFCeEoY9BSY2EjOupNAuZAmBtHHIQ/NuI9geCc8r8GPhP/x7+KvEFv6PYWkq/lKwP/jo/H0oBJbs5jwp8BvEmtlJ9XKaRZMgcGTDysCMjCA/L77iCPSrX7PWq2mn+Nr3T7khJ7222QOT1ZTuK/iMn/gNfTdfD8Nnqsfi6aPRYrh9QtLmSSL7MpZ1MZJ3AD025o2Gnc+4KK8q8E/HDQdbsYrfxBcR6VqqjbJ5oKwyEfxK3Rfo2MeprtG8e+D1j3nxVouMZ4v4ify3ZpkHQ0Vwup/GLwLpindrkdy46JaxtKT+IG38zXFXfx01PXbhrDwP4Wury4PSW4UttHqUTp9S2KLjsz2a/wBQs9Ls5Ly/uobW2jGXlmcIo/E14t4m+MOq+Jb5vD3w5sLi5nfKtfeXzjplAfujp874x6DrT7L4T+KvGt1HqXxF12YIDuTT7dx8vtx8if8AAQSfWvWtB8N6P4YsBZaNp8NpDxu8sfM5HGWY8sfcmkGiPOPAPwWttGuk1vxRMNT1hm80Rsd8cT9ckn77Z7njPr1r1yiimDdwooooEFFFFABRRRQAUyaaK2geeeVIoo1LPI7BVUDqST0FPrwn4p+INW8beLo/h14ZyUVgb6QNhWYAEhiOiJ1Pq3GMgZBpXL+pePfEXxF1qbw98P8ANpp8Zxda04KkL0+T+7nt/Ef9nBNdn4P+GPh/wgBcRwm+1Vjuk1C6G6QseSV7Lz6c+pNbXhTwxp/hDw/baRpyYjiGXkI+aV+7t7n9OnatqgL9gooooEFcl498DaN400SWPUVSC5hQtBfBRvgxzye6+o/kea62uB+MXiZPDfw8vgrD7VqCmzhXPPzghz+C7ufXFA0eV/s6+Iraw8Q6lodwSsmpRpJbsTwXjDErj1KsT/wCuyskGvftM31w0jGPQ9PCxFeRuZQCp/GaT8RXjtt4Y1jwn4X0D4hxsADfgxwFSCFU5Rif7rbXH029d1e0fA2GXUbPxF4tuowlxrOoswXqAqkng+m52H/AaSKfc80+LWp3Hhz4x6ne6W/lXE1oI5DjH+sg2EjHfBBB9Rmvc/hb4aPhb4fabZSx7LqZftVyCMESPzg+6jav/Aaj8R/C/Q/FHjCx8RagZTJaqqvbrjy59pJXdxnqefUDFdtQJvQ8l/aImaL4dWyKeJdSiRvcbJG/moqv+zrpS2vgu/1JkxLe3hUN/eSNQB/48z0/9oixvLrwPZT28TyQW16Hn2qTsBRgGPoMnGf9oV1vwo0yfSfhjodpcwvDN5TSMjjDDe7OMj6MKOofZOyr51+JfgPxbdfF4a1o+lSXcN1LBLBKgBRGjRARITwvKZ54OR34r6KopiTsFFFFAgr5u+AIW5+JOuXbfM/2SQqT/tSpk19IOyojOxwqjJPoK+bP2cTnxnqx9bA/+jEpFLZnsPij4WeE/Fkr3F9p3k3jnLXVq3lyMfU9mPuQa5Bf2cvCwHOqawTtxnzIuuev3K9iop2FdnnukfBPwNpJDtpj30g6Peyl/wDx0YU/lXd2lla6fbrb2VtDbQL92KGMIo+gHFT0UCuFFFFABRRRQAUUUUAFFFFABRRRQBT1a/XStGvtRddyWlvJOw9Qqlv6V5L+z7piz6RrHii73SajfXjRNK45KgByQfdmOf8AdHpXp3iy1lvvBuuWcCl5p9PuIo1HUs0bAD8zXDfALUUvPhpHagjfZXUsTDPPJ3g/+P8A6Uh9D1GiiimIKKKzdd1/S/DWlyajq95HbW0f8THlj6KOrH2FAFq+vrXTLGa9vZ0gtoELySyHCqB3NfPjQ3fx1+JHnqk0PhXTPk3Hglc5IH+25H4KB6c2Z5fE/wAdtWWK3SXSfB9tLy7dZSPXs7+33V9z19w0LQtO8N6PBpel26wWsIwAOrHuzHuT3NLcrYw/iF4fh1P4Y6vpNvCESGz328aL90xAMigf8BA/Gua/Z/vEufhr5KoFa1vZYmIPLEhXyf8AvvH4V6mQCCCMg9RXivwCgl0y98ZaJITiwvUTH+1mRD/6LFAuh7VRRRTEBAIIIyD1FFFFABRRRQAUUUUAUtYLrol+0fEgtpCv12nFfO/7OH/I46r/ANg//wBqJX0nJGssTxt911Kn6Gvmv9nFX/4TTVWH3Bp5B+vmJj+RpFLZn0tRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACvBdRttV+CfjW71yys2u/COpyfv4ouPIJJIHsVJIXPBBx15HvVMlijnheGaNJInBVkdQQw9CD1oGmcdpPxZ8EavbrLHr9tbMRlorw+Syn0O7g/gTVu8+JPgqxjLzeJ9MYDtDOJj+SZNZN58FvAV7cSztovktJ1EFxIiqfUKGwPpjHFNtPgn4CtJVkOjNOy9POuZGH5bsH8aWoaHO6r8c11C5OmeB9Du9Xvn+VJZIyIx/tbR8xH120mkfCfWvE+qx658SdSa7kXJi02KT5EHoSvAHsvXjJ7V6xpuk6do1sLbTLC2s4Ovl28SoCfUgDk1coC/YitbW3srWO2tYI4IIl2pHGoVVHoAOlS0UUxEU9zBbCMzzxxCRxGnmOF3OeijPUnsK8c+Es7L8V/iLb5+V76RyPdZ5B/7MasftF3Ii8DabErlZX1NHXHoscmT+ZFcr+zbbyya7r131jS2jjYn+8zEj/wBBNLqUlpc+iqKKKZIUUUUAFFFFABRRRQAV438EvBereE9a8TJrFg8En7lLeU4KypmQkqRwRwv0717JRQO4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDwf9paYraeG4OzyXDn/gIjH/s1aX7ONgkXhDVdQB/eXF95R/3URSP1dq5L9pC8d/FmkWRPyQ2JlA93kYH/ANFivVfgzoR0L4Z6aHXbNfZvZOf7+Nv/AI4EpdS/snfUUUUyAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5S+NUj33xhubaZyY41t4UA/hUorED8WY/jX1VDDHbwRwQoEijUIijooAwBRRSRT2Q+iiimSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q=="
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_life">
          <h2>生活方式</h2>
          <fieldset>
            <legend style="margin-left: 20px;">体育锻炼</legend>
            <el-form-item label="锻炼频率">
              <CheckBoxAuto :value.sync="detail.sport_rate" :values="'1.每天|2.每周一次以上|3.偶尔|4.不锻炼'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="每次锻炼时间" style="width: 140px">
              <el-input v-model="detail.sport_everytime">
                <template slot="append">分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item label="坚持锻炼时间" style="width: 130px">
              <el-input v-model="detail.sport_years">
                <template slot="append">年</template>
              </el-input>
            </el-form-item>
            <el-form-item label="运动方式" style="width: 190px">
              <el-autocomplete
                class="inline-input"
                multiple
                v-model="detail.sport_type"
                clearable
                :fetch-suggestions="querySearch"
                placeholder=""
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="饮食习惯">
              <CheckBoxAuto :value.sync="detail.dietary_style" :values="'1.荤素均衡|2.荤食为主|3.素食为主'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="饮食嗜好">
              <CheckBoxAuto :value.sync="detail.dietary_like" :values="'4.嗜盐|5.嗜油|6.嗜糖'" max="2"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">吸烟情况</legend>
            <el-form-item label="吸烟状况">
              <CheckBoxAuto :value.sync="detail.smoke" :values="'1.从不吸烟|2.已戒烟|3.吸烟'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item  label="日吸烟量">
              <el-input v-model="detail.smoke_everyday" style="width: 180px">
                <template slot="prepend">平均</template>
                <template slot="append">支</template>
              </el-input>
            </el-form-item>
            <el-form-item  label="开始吸烟年龄">
              <el-input v-model="detail.smoke_start_age" style="width: 120px">
                <template slot="append">岁</template>
              </el-input>
            </el-form-item>
            <el-form-item  label="戒烟年龄">
              <el-input v-model="detail.smoke_stop_age" style="width: 120px">
                <template slot="append">岁</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">饮酒情况</legend>
            <el-form-item label="饮酒频率">
              <CheckBoxAuto :value.sync="detail.drink_rate" :values="'1.从不|2.偶尔|3.经常|4.每天'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item  label="日饮酒量">
              <el-input v-model="detail.drink_everyday" style="width: 180px; margin-right: 10px;">
                <template slot="prepend">平均</template>
                <template slot="append">两</template>
              </el-input>
              <el-input v-model="detail.drink_start_age" style="width: 250px">
                <template slot="prepend">开始饮酒年龄</template>
                <template slot="append">岁</template>
              </el-input>
            </el-form-item>
            <el-form-item label="是否戒酒">
              <CheckBoxAuto :value.sync="detail.drink_stop" :values="'1.未戒酒|2.已戒酒'"></CheckBoxAuto>
              <el-input v-model="detail.drink_stop_age" style="width: 220px;">
                <template slot="prepend">戒酒年龄</template>
                <template slot="append">岁</template>
              </el-input>
            </el-form-item>
            <el-form-item label="近一年内是否曾醉酒">
              <CheckBoxAuto :value.sync="detail.drunk_this_year" :values="'1.是|2.否'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="饮酒种类">
              <CheckBoxAuto :value.sync="detail.drink_type" :values="'1.白酒|2.啤酒|3.红酒|4.黄酒|5.其他'" :other.sync="detail.drink_type_other"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">职业病危害因素接触史</legend>
            <el-form-item label=" ">
              <CheckBoxAuto :value.sync="detail.occupation_disease" :values="'1.无|2.有'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label=" ">
              <el-input v-model="detail.od_types" style="width: 220px;">
                <template slot="prepend">工种</template>
              </el-input>
            </el-form-item>
            <el-form-item label=" ">
              <el-input v-model="detail.od_years" style="width: 220px;">
                <template slot="prepend">从业时间</template>
                <template slot="append">年</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">毒物种类</legend>
            <el-form-item label="">
              <el-input v-model="detail.od_dust" style="width: 220px;">
                <template slot="prepend">粉尘</template>
              </el-input>
              <CheckBoxAuto :value.sync="detail.od_dust_protect" :values="'1.无|2.有'" :other.sync="detail.od_dust_protect_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="detail.od_radioactivity" style="width: 220px;">
                <template slot="prepend">放射物质</template>
              </el-input>
              <CheckBoxAuto :value.sync="detail.od_radioactivity_protect" :values="'1.无|2.有'" :other.sync="detail.od_adioactivity_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="detail.od_physics" style="width: 220px;">
                <template slot="prepend">物理因素</template>
              </el-input>
              <CheckBoxAuto :value.sync="detail.od_physics_protect" :values="'1.无|2.有'" :other.sync="detail.od_physics_protect_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="detail.od_chemistry" style="width: 220px;">
                <template slot="prepend">化学物质</template>
              </el-input>
              <CheckBoxAuto :value.sync="detail.od_chemistry_protect" :values="'1.无|2.有'" :other.sync="detail.od_chemistry_protect_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="">
              <el-input v-model="detail.od_other" style="width: 220px;">
                <template slot="prepend">其他</template>
              </el-input>
              <CheckBoxAuto :value.sync="detail.od_other_protect" :values="'1.无|2.有'" :other.sync="detail.od_other_protect_content"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_viscus">
          <h2>脏器功能</h2>
          <fieldset>
            <legend>口腔</legend>
            <el-form-item label="口唇">
              <CheckBoxAuto :value.sync="detail.mouth_tips" :values="'1.红润|2.苍白|3.发绀|4.皲裂|5.疱疹'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="咽部">
              <CheckBoxAuto :value.sync="detail.mouth_pharynx" :values="'1.无充血|2.充血|3.淋巴滤泡增生'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="齿列">
              <CheckBoxAuto :value.sync="detail.mouth_dentition" :values="'1.正常|2.缺齿|3.龋齿|4.义齿(假牙)'" max="2" first="only"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="2.缺齿">
              <el-input v-model="detail.mouth_toothmiss_left_up" :disabled="mouth_toothmiss" style="width: 120px;"></el-input>
              <el-checkbox border label="↖" :disabled="mouth_toothmiss" style="margin-right:0" @change="toothChange(v,detail.mouth_toothmiss_left_up)"></el-checkbox>
              <el-checkbox border label="↗" style="margin-right:0" :disabled="mouth_toothmiss" @change="toothChange(v,detail.mouth_toothmiss_left_up)"></el-checkbox>
              <el-input v-model="detail.mouth_toothmiss_right_up" :disabled="mouth_toothmiss" style="width: 120px;"></el-input>
              <br />
              <el-input v-model="detail.mouth_toothmiss_left_down" :disabled="mouth_toothmiss" style="width: 120px;"></el-input>
              <el-checkbox border label="↙" :disabled="mouth_toothmiss" style="margin-right:0" />
              <el-checkbox border label="↘" :disabled="mouth_toothmiss" style="margin-right:0" />
              <el-input v-model="detail.mouth_toothmiss_right_down" :disabled="mouth_toothmiss" style="width: 120px;"></el-input>
            </el-form-item>
            <el-form-item label="3.龋齿">
              <el-input v-model="detail.mouth_toothdecay_left_up" :disabled="mouth_toothdecay" style="width: 120px;"></el-input><el-checkbox border label="↖" :disabled="mouth_toothdecay" style="margin-right:0" />
              <el-checkbox border label="↗" :disabled="mouth_toothdecay" style="margin-right:0" /><el-input v-model="detail.mouth_toothdecay_right_up" :disabled="mouth_toothdecay" style="width: 120px;"></el-input><br />
              <el-input v-model="detail.mouth_toothdecay_left_down" :disabled="mouth_toothdecay" style="width: 120px;"></el-input><el-checkbox border label="↙" :disabled="mouth_toothdecay" style="margin-right:0" />
              <el-checkbox border label="↘" :disabled="mouth_toothdecay" style="margin-right:0" /><el-input v-model="detail.mouth_toothdecay_right_down" :disabled="mouth_toothdecay" style="width: 120px;"></el-input>
            </el-form-item>
            <el-form-item label="4.义齿(假牙)">
              <el-input v-model="detail.mouth_denture_left_up" :disabled="mouth_denture" style="width: 120px;"></el-input><el-checkbox border label="↖" :disabled="mouth_denture" style="margin-right:0" />
              <el-checkbox border label="↗" :disabled="mouth_denture" style="margin-right:0" /><el-input v-model="detail.mouth_denture_right_up" :disabled="mouth_denture" style="width: 120px;"></el-input><br />
              <el-input v-model="detail.mouth_denture_left_down" :disabled="mouth_denture" style="width: 120px;"></el-input><el-checkbox border label="↙" :disabled="mouth_denture" style="margin-right:0" />
              <el-checkbox border label="↘" :disabled="mouth_denture" style="margin-right:0" /><el-input v-model="detail.mouth_denture_right_down" :disabled="mouth_denture" style="width: 120px;"></el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="视力">
              <el-input v-model="detail.vision_left" style="width: 150px;">
                <template slot="prepend">左眼</template>
              </el-input>
              <el-input v-model="detail.vision_right" style="width: 150px;">
                <template slot="prepend">右眼</template>
              </el-input>
            </el-form-item>
            <el-form-item label="矫正视力">
              <el-input v-model="detail.vision_left_correct" style="width: 150px;">
                <template slot="prepend">左眼</template>
              </el-input>
              <el-input v-model="detail.vision_right_correct" style="width: 150px;">
                <template slot="prepend">右眼</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="听力">
              <CheckBoxAuto :value.sync="detail.hearing" :values="'1.听见|2.听不清或无法听见'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="运动功能">
              <CheckBoxAuto :value.sync="detail.sports" :values="'1.可顺利完成|2.无法独立完成任何一个动作'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_body">
          <h2>查体</h2>
          <fieldset>
            <el-form-item label="眼底*">
              <CheckBoxAuto :value.sync="detail.fundus" :values="'1.正|2.异常'" :other.sync="detail.fundus_other"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="皮肤">
              <CheckBoxAuto :value.sync="detail.skin" :values="'1.正常|2.潮红|3.苍白|4.发绀|5.黄染|6.色素沉着|.其他'" :other.sync="detail.skin_other"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="巩膜">
              <CheckBoxAuto :value.sync="detail.sclera" :values="'1.正常|2.黄染|3.充血|4.其他'" :other.sync="detail.sclera_other"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">肺</legend>
            <el-form-item label="淋巴结">
              <CheckBoxAuto :value.sync="detail.lymph_node" :values="'1.正常|2.锁骨上|3.腋窝|4.其他'" :other.sync="detail.lymph_node_other"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="桶状胸">
              <CheckBoxAuto :value.sync="detail.barrelchest" :values="'1.否|2.是'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="呼吸音">
              <CheckBoxAuto :value.sync="detail.breath_sound" :values="'1.正常|2.异常'" :other.sync="detail.breath_sound_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="罗音">
              <CheckBoxAuto :value.sync="detail.rale" :values="'1.正常|2.干罗音|3.湿罗音|4.其他'" :other.sync="detail.rale_other"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">心脏</legend>
            <el-form-item label="心率">
              <el-input v-model="detail.heart_rate" style="width: 150px">
                <template slot="append">次/分钟</template>
              </el-input>
            </el-form-item>
            <el-form-item label="心律">
              <CheckBoxAuto :value.sync="detail.heart_rhythm" :values="'1.齐|2.不齐|3.绝对不齐'"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="杂音">
              <CheckBoxAuto :value.sync="detail.cardiac_murmur" :values="'1.无|2.有'" :other.sync="detail.cardiac_murmur_content"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend style="margin-left: 20px;">腹部</legend>
            <el-form-item label="压痛">
              <CheckBoxAuto :value.sync="detail.tenderness" :values="'1.无|2.有'" :other.sync="detail.cardiac_murmur_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="包块">
              <CheckBoxAuto :value.sync="detail.abdominal_mass" :values="'1.无|2.有'" :other.sync="detail.abdominal_mass_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="肝大">
              <CheckBoxAuto :value.sync="detail.hepatomegaly" :values="'1.无|2.有'" :other.sync="detail.hepatomegaly_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="脾大">
              <CheckBoxAuto :value.sync="detail.splenomegaly" :values="'1.无|2.有'" :other.sync="detail.splenomegaly_content"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="移动性浊音">
              <CheckBoxAuto :value.sync="detail.shifting_dullness" :values="'1.无|2.有'" :other.sync="detail.shifting_dullness_content"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="下肢水肿">
              <CheckBoxAuto :value.sync="detail.edema_of_lower_limbs" :values="'1.无|2.单侧|3.双侧不对称|4.双侧对称'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="足背动脉搏动*">
              <CheckBoxAuto :value.sync="detail.dorsalis_pedis_artery_pulse" :values="'1.未触及|2.触及双侧对称|3.触及左侧弱或消失|4.触及右侧弱或消失'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="肛门指诊*">
              <CheckBoxAuto :value.sync="detail.anus" :values="'1.未见异常|2.触痛|.包块|4.前列腺异常|5.其他'" :other.sync="detail.anus_other"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="乳腺*" style="margin-top: 10px;">
              <CheckBoxAuto :value.sync="detail.galactophore" :values="'1.未见异常|2.乳房切除|3.异常泌乳|4.乳腺包块|5.其他'" :other.sync="detail.galactophore_other" max="4" first="only"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>妇科*</legend>
            <el-form-item label="外阴">
              <CheckBoxAuto :value.sync="detail.vulva" :values="'1.未见异常|2.异常'" :other.sync="detail.vulva_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="阴道">
              <CheckBoxAuto :value.sync="detail.vagina" :values="'1.未见异常|2.异常'" :other.sync="detail.vagina_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="宫颈">
              <CheckBoxAuto :value.sync="detail.cervix" :values="'1.未见异常|2.异常'" :other.sync="detail.cervix_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="宫体">
              <CheckBoxAuto :value.sync="detail.uterine_body" :values="'1.未见异常|2.异常'" :other.sync="detail.uterine_body_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="附件">
              <CheckBoxAuto :value.sync="detail.uterine_adnexa" :values="'1.未见异常|2.异常'" :other.sync="detail.uterine_adnexa_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label=" ">
              <el-input v-model="detail.body_other">
                <template slot="prepend">其他*</template>
              </el-input>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_assist">
          <h2>辅助检查</h2>
          <fieldset>
            <legend>血型</legend>
            <el-form-item label=" ">
              <el-input v-model="detail.blood_abo" style="width: 130px; margin-right: 40px;">
                <template slot="prepend">ABO</template>
              </el-input>
              <el-input v-model="detail.blood_rh" style="width: 130px;">
                <template slot="prepend">Rh*</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>血常规*</legend>
            <el-form-item label="血红蛋白">
              <el-input v-model="detail.blood_hgb" style="width: 170px;">
                <template slot="append">g/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="白细胞">
              <el-input v-model="detail.blood_wbc" style="width: 180px;">
                <template slot="append">10^9/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血小板">
              <el-input v-model="detail.blood_plt" style="width: 180px;">
                 <template slot="append">10^9/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="其他">
              <el-input v-model="detail.blood_other" style="width: 200px;">
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>尿常规*</legend>
            <el-form-item label="尿蛋白">
              <el-input v-model="detail.urine_pro" style="width: 100px; ">
              </el-input>
            </el-form-item>
            <el-form-item label="尿糖">
              <el-input v-model="detail.urine_glu" style="width: 100px;">
              </el-input>
            </el-form-item>
            <el-form-item label="尿酮体">
              <el-input v-model="detail.urine_ket" style="width: 100px;">
              </el-input>
            </el-form-item>
            <el-form-item label="尿潜血">
              <el-input v-model="detail.urine_bld" style="width: 100px;">
              </el-input>
            </el-form-item>
            <el-form-item label="其他">
              <el-input v-model="detail.urine_other" style="width: 200px;">
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="空腹血糖">
              <el-input v-model="detail.blood_fbg2h" style="width: 160px;">
                <template slot="append">mmol/L</template>
              </el-input>
              或
              <el-input v-model="detail.blood_fbg2h_mg" style="width: 150px;">
                <template slot="append">mg/dL</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="同型半胱氨酸">
              <el-input v-model="detail.blood_fbg2h" style="width: 160px;">
                <template slot="append">umol/L</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="尿微量白蛋白*">
              <el-input v-model="detail.urine_malb" style="width: 160px;">
                <template slot="append">mg/dL</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="大便潜血*">
              <CheckBoxAuto :value.sync="detail.fecal_occult_blood" :values="'1.阴性|2.阳性'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="糖化血红蛋白*">
              <el-input v-model="detail.bloodbc_ghb" style="width: 160px;">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="乙型肝炎表面抗原*">
              <CheckBoxAuto :value.sync="detail.bloodbc_hbsag" :values="'1.阴性|2.阳性'"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>肝功能*</legend>
            <el-form-item label="血清谷丙转氨酶">
              <el-input v-model="detail.bloodbc_alt" style="width: 150px;">
                <template slot="append">U/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血清谷草转氨酶">
              <el-input v-model="detail.bloodbc_ast" style="width: 150px;">
                <template slot="append">U/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="白蛋白">
              <el-input v-model="detail.bloodbc_alb" style="width: 150px;">
                <template slot="append">g/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="总胆红素">
              <el-input v-model="detail.bloodbc_tbil" style="width: 180px;">
                <template slot="append">umol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="直接胆红素">
              <el-input v-model="detail.bloodbc_dbil" style="width: 180px;">
                <template slot="append">umol/L</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>肾功能*</legend>
            <el-form-item label="血清肌酐">
              <el-input v-model="detail.bloodbc_cr" style="width: 180px;">
                <template slot="append">umol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血尿素">
              <el-input v-model="detail.bloodbc_ure" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血钾浓度">
              <el-input v-model="detail.bloodbc_k" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血钠浓度">
              <el-input v-model="detail.bloodbc_na" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>血脂*</legend>
            <el-form-item label="总胆固醇">
              <el-input v-model="detail.bloodbc_tc" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="甘油三酯">
              <el-input v-model="detail.bloodbc_tg" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血清低密度脂蛋白胆固醇">
              <el-input v-model="detail.bloodbc_ldlc" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
            <el-form-item label="血清高密度脂蛋白胆固醇">
              <el-input v-model="detail.bloodbc_hdlc" style="width: 180px;">
                <template slot="append">mmol/L</template>
              </el-input>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="心电图*" style="margin-top: 10px;">
              <el-input v-model="setting.ecg" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.ecg" :values="setting.ecg" :other.sync="detail.ecg_other"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="胸部X线片*">
              <CheckBoxAuto :value.sync="detail.chest_xray" :values="'1.正常|2.异常'" :other.sync="detail.chest_xray_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <legend>B超</legend>
            <el-form-item label="腹部B超">
              <CheckBoxAuto :value.sync="detail.abdomen_bus" :values="'1.正常|2.异常'" :other.sync="detail.abdomen_bus_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="其他">
              <CheckBoxAuto :value.sync="detail.bus_other" :values="'1.正常|2.异常'" :other.sync="detail.bus_other_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="宫颈涂片*">
              <CheckBoxAuto :value.sync="detail.cervical_smear" :values="'1.正常|2.异常'" :other.sync="detail.cervical_smear_abnormal"></CheckBoxAuto>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label=" ">
              <el-input v-model="detail.assist_other">
                <template slot="prepend">其他*</template>
              </el-input>
            </el-form-item>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_health">
          <h2>现存主要健康问题</h2>
          <fieldset>
            <el-form-item label="脑血管疾病" style="margin-top: 10px;">
              <el-input v-model="setting.cerebrovascular" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.cerebrovascular" :values="setting.cerebrovascular" :other.sync="detail.cerebrovascular_other" max="5" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="肾脏疾病" style="margin-top: 10px;">
              <el-input v-model="setting.kidney_diseases" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.kidney_diseases" :values="setting.kidney_diseases" :other.sync="detail.kidney_diseases_other" max="5" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="心脏疾病" style="margin-top: 10px;">
              <el-input v-model="setting.heart_diseases" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.heart_diseases" :values="setting.heart_diseases" :other.sync="detail.heart_diseases_other" max="6" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="心血管疾病" style="margin-top: 10px;">
              <el-input v-model="setting.cardiovascular" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.cardiovascular" :values="setting.cardiovascular" :other.sync="detail.cardiovascular_other" max="5" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="血管疾病" style="margin-top: 10px;">
              <el-input v-model="setting.vascular_diseases" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.vascular_diseases" :values="setting.vascular_diseases" :other.sync="detail.vascular_diseases_other" max="3" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="眼部疾病" style="margin-top: 10px;">
              <el-input v-model="setting.eye_diseases" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.eye_diseases" :values="setting.eye_diseases" :other.sync="detail.eye_diseases_other" max="3" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="神经系统其他疾病" style="margin-top: 10px;">
              <el-input v-model="setting.nervous_system" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.nervous_system" :values="setting.nervous_system" :other.sync="detail.nervous_system_other" max="3" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="其他系统疾病" style="margin-top: 10px;">
              <el-input v-model="setting.other_diseases" style="margin-bottom: 10px;"></el-input>
              <CheckBoxAuto :value.sync="detail.other_diseases" :values="setting.other_diseases" :other.sync="detail.other_diseases_other" max="3" first="only"></CheckBoxAuto>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_hospital">
          <h2>住院治疗情况</h2>
          <fieldset>
            <legend>
              住院史
              <el-button type="primary" icon="el-icon-plus" circle size="mini" style="margin-left: 10px;" @click="addItem(detail.hospital_history)" />
            </legend>
            <div v-for="(hospital, index) in detail.hospital_history" :key="'hospital' + index" style="width: 100%;">
              <el-form-item label="" style="display: inline-block;">
                <el-date-picker
                  v-model="hospital.date0"
                  type="date"
                  placeholder="入院日期"
                  :picker-options="pickerOptions"
                  style="width: 140px;">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-date-picker
                  v-model="hospital.date1"
                  type="date"
                  placeholder="出院日期"
                  :picker-options="pickerOptions"
                  style="width: 140px;">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="hospital.reseaon" placeHolder="原因" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="hospital.name" placeHolder="医疗机构名称" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="hospital.patient_no" placeHolder="病案号" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.hospital_history)" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeItem(detail.hospital_history,hospital)" />
              </el-form-item>   
            </div>            
          </fieldset>
          <fieldset>
            <legend>家庭病床史
              <el-button type="primary" icon="el-icon-plus" circle size="mini" style="margin-left: 10px;" @click="addItem(detail.home_history)" />
            </legend>
            <div v-for="(home, index) in detail.home_history" :key="'home' + index" style="width: 100%;">
              <el-form-item label="" style="display: inline-block;">
                <el-date-picker
                  v-model="home.date0"
                  type="date"
                  placeholder="入院日期"
                  :picker-options="pickerOptions"
                  style="width: 140px;">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-date-picker
                  v-model="home.date1"
                  type="date"
                  placeholder="出院日期"
                  :picker-options="pickerOptions"
                  style="width: 140px;">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="home.reseaon" placeHolder="原因" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="home.name" placeHolder="医疗机构名称" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="home.patient_no" placeHolder="病案号" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.home_history)" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeItem(detail.home_history,home)" />
              </el-form-item>   
            </div>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_medcoin">
          <h2>主要用药情况</h2>
          <fieldset>
            <legend><el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.drug_history)" />
            </legend>
            <div v-for="(drug, index) in detail.drug_history" :key="'drug' + index" style="width: 100%;">
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="drug.name" placeHolder="药物名称" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="drug.usage" placeHolder="用法" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="drug.dosage" placeHolder="用量" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="drug.duration" placeHolder="用药时间" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-button-group>
                  <el-button type="info" plain disabled> 服药依从性</el-button>
                  <RadioNull :value.sync="drug.compliance" :values="'1.规律|2.间断|3.不服药'"></RadioNull>
                </el-button-group>
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.drug_history)" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeItem(detail.drug_history,drug)" />
              </el-form-item>   
            </div>
          </fieldset>
        </div>
        <div id="tab_yufang">
          <h2>非免疫规划预防接种史</h2>
          <fieldset>
            <legend><el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.vaccinate_history)" />
            </legend>
            <div v-for="(vaccinate, index) in detail.vaccinate_history" :key="'vaccinate' + index" style="width: 100%;">
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="vaccinate.name" placeHolder="药物名称" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-date-picker
                  v-model="vaccinate.date"
                  type="date"
                  placeholder="接种日期"
                  :picker-options="pickerOptions"
                  style="width: 140px;">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="vaccinate.hospital" placeHolder="用量" style=" width: 150px" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.vaccinate_history)" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeItem(detail.vaccinate_history,vaccinate)" />
              </el-form-item>   
            </div>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_pingjia">
          <h2>健康评价</h2>
          <fieldset>
            <el-form-item label=" ">
              <CheckBoxAuto :value.sync="detail.health_evaluation" :values="'1.体检无异常|2.有异常'" first="only"></CheckBoxAuto>
              <el-button type="primary" icon="el-icon-plus" circle size="mini" v-if="(detail.health_evaluation+'').indexOf('.有异常')>0" @click="addItem(detail.health_evaluation_abnormal)" style="margin-left: 10px;" />
            </el-form-item>
            <div v-for="(abnormal, index) in detail.health_evaluation_abnormal" :key="'abnormal' + index" style="width: 100%;" v-if="(detail.health_evaluation+'').indexOf('.有异常')>0">
              <el-form-item label="" style="display: inline-block;">
                <el-input v-model="abnormal.name" placeHolder="异常内容" />
              </el-form-item>
              <el-form-item label="" style="display: inline-block;">
                <el-button type="primary" icon="el-icon-plus" circle size="mini" @click="addItem(detail.health_evaluation_abnormal)" />
                <el-button type="danger" icon="el-icon-delete" circle size="mini" style="margin-left: 10px;" @click.prevent="removeItem(detail.health_evaluation_abnormal,abnormal)" />
              </el-form-item>   
            </div>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACUAQEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivNdZ+MOm+HviRN4Y1W0eCzjSMG/3ZCuyhhlcfcwwGexB4x0APSqKbHIksayRuro4DKynIIPQg06gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArwD9o7w6qnSvEkKYLE2dwR36tGf/AEMZ+le/1xnxX0ldY+GOuQkLvgtzdIxHQxfOce5CkfjQxp6nn/7PnjS4voLrwrfStIbWLz7NmOSI8gMmfQEqR7E9gK9SvvHPhnTvEMGg3esW8epTkKsOScMTgKxAwpPYEivjbQ77VLDVYm0e6ltryb9wkkTbW+f5cZ7da7fS/BiW3xx07w3Df/2iba7jlup2XaHKASyjqfQrz3pXKcdT6zooopkBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAVdSnuLXS7u4tLb7TcxQu8MAOPNcKSq57ZOB+NeQ+Dfj1a3t2NM8XWqaXdhyn2lAREGHGHU5KHPGeR64r2ivOfiL8I9L8bI17alLDWgOLgL8k3tIB1/3hyPfpQNW6nokUsc0SSxOskbqGR1OQwPQg9xTq+PPDnjvxN8OdbexjvRcWltMY57IzCWB8H5thGQp91/HPSvr63nS6tYriPOyVA67hg4IyMikmDViWiiimIKKKKACiiigAooooAK8u+IviW+1zUT8PPCyiXU71NuoXB5S0gYfMGPqQefQEAckY6D4keMj4P8NeZaJ5ur3r/ZtPgA3FpT/Ft7gfqSB3pPhz4JHhDQ2e8YT65fN5+oXRO5nkJJ257gZP1OT3oGu58f3NvPpuoTQtuSa2mMZI4Kupx/MV7l+z1ok9/qus+Lb5pJpSTbxyyHcXkc75WJPOfu8/7Rrzr4ux2MXxT11dPVRF5ys+w5BlKKZPx3ls++aZZfE3X9K8FweGdJkjsIEMhluYBiaXcxP3v4cZxkc8dak0eqPscMrZwQcHBwehpa8d/Z70jV7Pw5qWpag8gs9RlR7WORiSSu4PJg/wB7KjPfb9K9iqjNqwUUU2SRIo2eR1RFGSzHAAoEOorF1bxh4c0MD+09bsLZmUOqPOu9lIyCFHJH4Vyt18cPAVsxVdXkuCOvk2sn8yoFAHolFeXJ8fvBDOAZNQUH+I23A/I12nh3xl4e8WRu2iapBdMgy8Yysij1KMAwHvjFAWN2iiigAooooAKKKKACiiigArC8X+K7HwZ4em1jUEmkiRlRY4QCzseg54H1rdqhrWjWHiHR7nStTgE9pcLtdDx7gg9iCAQfUUAeDaj+0lfuxGmeHraJezXM7SE/goXH51UW8+K3xaj8uFf7O0eUYZkBt4GU9fmOXkHsMiqvi/4B69pEslx4ff8AtWyHKxkhZ0HoR0b6jk+grlNP8RePPhzdRR79S09eGFreRt5Tj/cbj8RzUl2XQ948F/BDw94ZeK81E/2tqKYYNMuIoz6qnc+7E/QV6hXlfgD426T4pli07V400zVXwqZb9zM3opPKk/3T+BJr1SqJd+oUUUUCCiiqOs6xY6BpFzqupziCztl3SSEZxzgAAdSSQAPU0AXqK4Pwj8XfC/jLVv7LsWu7a8YExR3car5uBk7SrEZxzg4Nb3jXVr/Q/Bmranplubi9t4C8SBd2D03Y7hQSx+lAWNK+1bTdMMQ1DULW0MrBI/tEyx729BkjJq5XyNoXgPxl8Tjea5NM7qEYrdXrH9+4zhI/bPHGFH6VreCPize6H4I17RdQuneWG0b+y3ckujsQmwew3bgOwU+wpXK5TvvD7r8RvjTqGuSYl0fw2ogslzlWlyQH9+Q7Z9krvfiB4xg8D+E59WkjMk7N5FtHjh5WBK59AACT7D1rn/gbop0n4Z2kzoVl1CV7pgwwcE7V/AqoP411XjDwjpvjbQm0nVDMsPmLKkkLAOjjOCMgjoSOR0JoE9z4ou7qe+vJ7y6laW4nkaWWRursxySfqTXT/Dfwc3jbxlbaa+RZxjz7tgcERKRkD3JIX2zntWt8R7zwxplpa+D/AAvCtxBp87TXOpSYaSaYjBUMAPlAwDjglR6ZOR4H13xXpdxeWPhGKR72+RQ7QW4llVFz93IO0fNyfpyKRp00PsGa50zQNMTz57WwsbdAiGR1jRFAwAM8cCvPde+PPg/SC8Vk9xqs68YtkxHn3dsce4BrhdO+CHjDxTdLqHjHXGgLdVklNzPj067VH0Jx6V6h4d+EPgzw4FePSkvrlf8Alvf4mOfUKRtH1ABpmdkebn4o/Evxqxj8JeHTaQMcCdIvNx7GWQCMfkKVPg1488VMJvFniry0Y5MLSvcFf+A5CD8DX0AqhFCqAFAwABwBS0WC/Y8k039nnwlahTe3Wo3r/wAQaVY0P4KMj866CL4NeAIVwvh6NvUvcTMf1eu7ophdnGR/CbwJHHLGvhu1IlXaxZnYgexLZU+4wa8o1nwrpngD40+E4fDF3cLJeXKG4tWbf5MTOFIDdSpXfwckbc5OePSPiP8AFbTPA9s1rb+Xe606/u7YNlYvRpMdB7dT7da5v4UeC9Xv9bl+IPixnfUroE2kci4KqRjzCO3y/Ko7D8KQ1fqezUUUUyQooooAKKKKACiiigAoork/FnxH8NeDlKajfCS8x8tlbfvJj6ZH8P1YigDrKjnt4LqFobiGOaJvvJIoZT9Qa8sPiv4oeJYTP4e8KW2lWbEbJNTf964P8QUkYGOeh9iaSXwh8WNQVJLrx1aWsgXmO1gwoP1Crmgdin8QvgXYa0smo+F1h0/UOWe1+7BN/ugfcb6cfTk1l/Cr4l6lp2sr4J8YeZHOjeRazXAxIj9onJ6g/wAJ+g5BGNKbRPjR4db7TZa9Za7EvJt5Qu5v++lX9HzXn/xE8Vad4u04nW9HuNC8Y6eFABjOy5TPKHPKkZLDORwRk5pFb6H1NWVrviTRvDVtFcazqENnFK/lo0h+83sBz/hXN/Cbxe/jDwNb3N0++/tWNrdMersoBD/ipB+ua4T432F14s8ceFvCenhRdvDNMGc/KA3c+wETGmSlrY9xhmiuYEnglSWKRQySIwZWB6EEdRWb4h8O6f4n01dO1RHktPOSVo1baJNpyFb1X1FeOfATxBqlnq+qeCNURl+yK80aSN80Lq4V4x6gls8dMH1rqfhzrV54s8eeLteWeU6PG8dlZpuzG2zOWHvjDf8AbSkFrHN/HHQYvD1xonjXRoY7W8tbpIZPKUKGIG6MkD02FfcEDtXeeNPifo3g3RbC/kSS8l1BBJa28RALJgHcSeg5Hr1+tUPjksTfCjUzIpLLLAYz6N5qjP5FvzryX4cabP8AE7xzp82sRK2maDp8EJjAO1hGNsan/ebc59cEUD3Wp9M2c4ubG3uBG0QljVwjDlcjOD9K+LfGun/ZviHrtjBEFA1KZYo17AudoH4EV9s18q+LY4bX9o0C4AWD+17SSTd02ny2JPtg0MIn0/plhDpGj2enwn9xZ26QIW/uooUZ/AV4J8W/jJ9sE3h3wvckW5yl3fRn/WdikZ/u+rd+g469l8dZfFCeEoY9BSY2EjOupNAuZAmBtHHIQ/NuI9geCc8r8GPhP/x7+KvEFv6PYWkq/lKwP/jo/H0oBJbs5jwp8BvEmtlJ9XKaRZMgcGTDysCMjCA/L77iCPSrX7PWq2mn+Nr3T7khJ7222QOT1ZTuK/iMn/gNfTdfD8Nnqsfi6aPRYrh9QtLmSSL7MpZ1MZJ3AD025o2Gnc+4KK8q8E/HDQdbsYrfxBcR6VqqjbJ5oKwyEfxK3Rfo2MeprtG8e+D1j3nxVouMZ4v4ify3ZpkHQ0Vwup/GLwLpindrkdy46JaxtKT+IG38zXFXfx01PXbhrDwP4Wury4PSW4UttHqUTp9S2KLjsz2a/wBQs9Ls5Ly/uobW2jGXlmcIo/E14t4m+MOq+Jb5vD3w5sLi5nfKtfeXzjplAfujp874x6DrT7L4T+KvGt1HqXxF12YIDuTT7dx8vtx8if8AAQSfWvWtB8N6P4YsBZaNp8NpDxu8sfM5HGWY8sfcmkGiPOPAPwWttGuk1vxRMNT1hm80Rsd8cT9ckn77Z7njPr1r1yiimDdwooooEFFFFABRRRQAUyaaK2geeeVIoo1LPI7BVUDqST0FPrwn4p+INW8beLo/h14ZyUVgb6QNhWYAEhiOiJ1Pq3GMgZBpXL+pePfEXxF1qbw98P8ANpp8Zxda04KkL0+T+7nt/Ef9nBNdn4P+GPh/wgBcRwm+1Vjuk1C6G6QseSV7Lz6c+pNbXhTwxp/hDw/baRpyYjiGXkI+aV+7t7n9OnatqgL9gooooEFcl498DaN400SWPUVSC5hQtBfBRvgxzye6+o/kea62uB+MXiZPDfw8vgrD7VqCmzhXPPzghz+C7ufXFA0eV/s6+Iraw8Q6lodwSsmpRpJbsTwXjDErj1KsT/wCuyskGvftM31w0jGPQ9PCxFeRuZQCp/GaT8RXjtt4Y1jwn4X0D4hxsADfgxwFSCFU5Rif7rbXH029d1e0fA2GXUbPxF4tuowlxrOoswXqAqkng+m52H/AaSKfc80+LWp3Hhz4x6ne6W/lXE1oI5DjH+sg2EjHfBBB9Rmvc/hb4aPhb4fabZSx7LqZftVyCMESPzg+6jav/Aaj8R/C/Q/FHjCx8RagZTJaqqvbrjy59pJXdxnqefUDFdtQJvQ8l/aImaL4dWyKeJdSiRvcbJG/moqv+zrpS2vgu/1JkxLe3hUN/eSNQB/48z0/9oixvLrwPZT28TyQW16Hn2qTsBRgGPoMnGf9oV1vwo0yfSfhjodpcwvDN5TSMjjDDe7OMj6MKOofZOyr51+JfgPxbdfF4a1o+lSXcN1LBLBKgBRGjRARITwvKZ54OR34r6KopiTsFFFFAgr5u+AIW5+JOuXbfM/2SQqT/tSpk19IOyojOxwqjJPoK+bP2cTnxnqx9bA/+jEpFLZnsPij4WeE/Fkr3F9p3k3jnLXVq3lyMfU9mPuQa5Bf2cvCwHOqawTtxnzIuuev3K9iop2FdnnukfBPwNpJDtpj30g6Peyl/wDx0YU/lXd2lla6fbrb2VtDbQL92KGMIo+gHFT0UCuFFFFABRRRQAUUUUAFFFFABRRRQBT1a/XStGvtRddyWlvJOw9Qqlv6V5L+z7piz6RrHii73SajfXjRNK45KgByQfdmOf8AdHpXp3iy1lvvBuuWcCl5p9PuIo1HUs0bAD8zXDfALUUvPhpHagjfZXUsTDPPJ3g/+P8A6Uh9D1GiiimIKKKzdd1/S/DWlyajq95HbW0f8THlj6KOrH2FAFq+vrXTLGa9vZ0gtoELySyHCqB3NfPjQ3fx1+JHnqk0PhXTPk3Hglc5IH+25H4KB6c2Z5fE/wAdtWWK3SXSfB9tLy7dZSPXs7+33V9z19w0LQtO8N6PBpel26wWsIwAOrHuzHuT3NLcrYw/iF4fh1P4Y6vpNvCESGz328aL90xAMigf8BA/Gua/Z/vEufhr5KoFa1vZYmIPLEhXyf8AvvH4V6mQCCCMg9RXivwCgl0y98ZaJITiwvUTH+1mRD/6LFAuh7VRRRTEBAIIIyD1FFFFABRRRQAUUUUAUtYLrol+0fEgtpCv12nFfO/7OH/I46r/ANg//wBqJX0nJGssTxt911Kn6Gvmv9nFX/4TTVWH3Bp5B+vmJj+RpFLZn0tRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACvBdRttV+CfjW71yys2u/COpyfv4ouPIJJIHsVJIXPBBx15HvVMlijnheGaNJInBVkdQQw9CD1oGmcdpPxZ8EavbrLHr9tbMRlorw+Syn0O7g/gTVu8+JPgqxjLzeJ9MYDtDOJj+SZNZN58FvAV7cSztovktJ1EFxIiqfUKGwPpjHFNtPgn4CtJVkOjNOy9POuZGH5bsH8aWoaHO6r8c11C5OmeB9Du9Xvn+VJZIyIx/tbR8xH120mkfCfWvE+qx658SdSa7kXJi02KT5EHoSvAHsvXjJ7V6xpuk6do1sLbTLC2s4Ovl28SoCfUgDk1coC/YitbW3srWO2tYI4IIl2pHGoVVHoAOlS0UUxEU9zBbCMzzxxCRxGnmOF3OeijPUnsK8c+Es7L8V/iLb5+V76RyPdZ5B/7MasftF3Ii8DabErlZX1NHXHoscmT+ZFcr+zbbyya7r131jS2jjYn+8zEj/wBBNLqUlpc+iqKKKZIUUUUAFFFFABRRRQAV438EvBereE9a8TJrFg8En7lLeU4KypmQkqRwRwv0717JRQO4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDwf9paYraeG4OzyXDn/gIjH/s1aX7ONgkXhDVdQB/eXF95R/3URSP1dq5L9pC8d/FmkWRPyQ2JlA93kYH/ANFivVfgzoR0L4Z6aHXbNfZvZOf7+Nv/AI4EpdS/snfUUUUyAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5S+NUj33xhubaZyY41t4UA/hUorED8WY/jX1VDDHbwRwQoEijUIijooAwBRRSRT2Q+iiimSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q=="
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_zhidao">
          <h2>健康指导</h2>
          <fieldset>
              <el-form-item  style="margin-top: 10px;">
                <el-input v-model="setting.health_guide" style="margin-bottom: 10px;"></el-input>
                <CheckBoxAuto :value.sync="detail.health_guide" :values="setting.health_guide"></CheckBoxAuto>
                <el-input v-model="detail.health_guide_other" :disabled="detail.health_guide.join('').indexOf('.其他')<0" style="clear:both;width: 120px" />
              </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="危险因素控制" style="margin-top: 10px;">
              <el-checkbox-group v-model="detail.dangerous_factor_control" style="display: inline;" @change="sync1">
                  <el-checkbox border label="1.戒烟" />
                  <el-checkbox border label="2.健康饮酒" />
                  <el-checkbox border label="3.饮食" />
                  <el-checkbox border label="4.锻炼" />
                  <br />
                  <el-checkbox border label="5.减体重" />
                  <el-input v-model="detail.dfc_weight_target" style=" width: 240px">
                    <template slot="prepend">（目标</template>
                    <template slot="append">kg）</template>
                  </el-input>
                  <br />
                  <el-checkbox border label="6.建议接种疫苗" />
                  <el-input v-model="detail.dfc_vaccine" style=" width: 140px">
                    </el-input>
                    <br />
                  <el-checkbox border label="7.其他" />
                  <el-input v-model="detail.dfc_other" :disabled="detail.dangerous_factor_control.join('').indexOf('.其他')<0" style="clear:both;width: 120px" />
              </el-checkbox-group>
              
            </el-form-item>
          </fieldset>
          <fieldset>
            <el-form-item label="责任医生">
              <el-checkbox label="开启" />
            </el-form-item>
            <el-form-item label="默认签名" style="width: 300px">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
          </fieldset>
        </div>
        <div id="tab_other">
          <h2>结果反馈</h2>
          <fieldset>
            <legend>以上体检结果，健康评价已面对面反馈本人（家属），并已进行健康指导。</legend>
            <el-form-item label="本人签字">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACUAQEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivNdZ+MOm+HviRN4Y1W0eCzjSMG/3ZCuyhhlcfcwwGexB4x0APSqKbHIksayRuro4DKynIIPQg06gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArwD9o7w6qnSvEkKYLE2dwR36tGf/AEMZ+le/1xnxX0ldY+GOuQkLvgtzdIxHQxfOce5CkfjQxp6nn/7PnjS4voLrwrfStIbWLz7NmOSI8gMmfQEqR7E9gK9SvvHPhnTvEMGg3esW8epTkKsOScMTgKxAwpPYEivjbQ77VLDVYm0e6ltryb9wkkTbW+f5cZ7da7fS/BiW3xx07w3Df/2iba7jlup2XaHKASyjqfQrz3pXKcdT6zooopkBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAVdSnuLXS7u4tLb7TcxQu8MAOPNcKSq57ZOB+NeQ+Dfj1a3t2NM8XWqaXdhyn2lAREGHGHU5KHPGeR64r2ivOfiL8I9L8bI17alLDWgOLgL8k3tIB1/3hyPfpQNW6nokUsc0SSxOskbqGR1OQwPQg9xTq+PPDnjvxN8OdbexjvRcWltMY57IzCWB8H5thGQp91/HPSvr63nS6tYriPOyVA67hg4IyMikmDViWiiimIKKKKACiiigAooooAK8u+IviW+1zUT8PPCyiXU71NuoXB5S0gYfMGPqQefQEAckY6D4keMj4P8NeZaJ5ur3r/ZtPgA3FpT/Ft7gfqSB3pPhz4JHhDQ2e8YT65fN5+oXRO5nkJJ257gZP1OT3oGu58f3NvPpuoTQtuSa2mMZI4Kupx/MV7l+z1ok9/qus+Lb5pJpSTbxyyHcXkc75WJPOfu8/7Rrzr4ux2MXxT11dPVRF5ys+w5BlKKZPx3ls++aZZfE3X9K8FweGdJkjsIEMhluYBiaXcxP3v4cZxkc8dak0eqPscMrZwQcHBwehpa8d/Z70jV7Pw5qWpag8gs9RlR7WORiSSu4PJg/wB7KjPfb9K9iqjNqwUUU2SRIo2eR1RFGSzHAAoEOorF1bxh4c0MD+09bsLZmUOqPOu9lIyCFHJH4Vyt18cPAVsxVdXkuCOvk2sn8yoFAHolFeXJ8fvBDOAZNQUH+I23A/I12nh3xl4e8WRu2iapBdMgy8Yysij1KMAwHvjFAWN2iiigAooooAKKKKACiiigArC8X+K7HwZ4em1jUEmkiRlRY4QCzseg54H1rdqhrWjWHiHR7nStTgE9pcLtdDx7gg9iCAQfUUAeDaj+0lfuxGmeHraJezXM7SE/goXH51UW8+K3xaj8uFf7O0eUYZkBt4GU9fmOXkHsMiqvi/4B69pEslx4ff8AtWyHKxkhZ0HoR0b6jk+grlNP8RePPhzdRR79S09eGFreRt5Tj/cbj8RzUl2XQ948F/BDw94ZeK81E/2tqKYYNMuIoz6qnc+7E/QV6hXlfgD426T4pli07V400zVXwqZb9zM3opPKk/3T+BJr1SqJd+oUUUUCCiiqOs6xY6BpFzqupziCztl3SSEZxzgAAdSSQAPU0AXqK4Pwj8XfC/jLVv7LsWu7a8YExR3car5uBk7SrEZxzg4Nb3jXVr/Q/Bmranplubi9t4C8SBd2D03Y7hQSx+lAWNK+1bTdMMQ1DULW0MrBI/tEyx729BkjJq5XyNoXgPxl8Tjea5NM7qEYrdXrH9+4zhI/bPHGFH6VreCPize6H4I17RdQuneWG0b+y3ckujsQmwew3bgOwU+wpXK5TvvD7r8RvjTqGuSYl0fw2ogslzlWlyQH9+Q7Z9krvfiB4xg8D+E59WkjMk7N5FtHjh5WBK59AACT7D1rn/gbop0n4Z2kzoVl1CV7pgwwcE7V/AqoP411XjDwjpvjbQm0nVDMsPmLKkkLAOjjOCMgjoSOR0JoE9z4ou7qe+vJ7y6laW4nkaWWRursxySfqTXT/Dfwc3jbxlbaa+RZxjz7tgcERKRkD3JIX2zntWt8R7zwxplpa+D/AAvCtxBp87TXOpSYaSaYjBUMAPlAwDjglR6ZOR4H13xXpdxeWPhGKR72+RQ7QW4llVFz93IO0fNyfpyKRp00PsGa50zQNMTz57WwsbdAiGR1jRFAwAM8cCvPde+PPg/SC8Vk9xqs68YtkxHn3dsce4BrhdO+CHjDxTdLqHjHXGgLdVklNzPj067VH0Jx6V6h4d+EPgzw4FePSkvrlf8Alvf4mOfUKRtH1ABpmdkebn4o/Evxqxj8JeHTaQMcCdIvNx7GWQCMfkKVPg1488VMJvFniry0Y5MLSvcFf+A5CD8DX0AqhFCqAFAwABwBS0WC/Y8k039nnwlahTe3Wo3r/wAQaVY0P4KMj866CL4NeAIVwvh6NvUvcTMf1eu7ophdnGR/CbwJHHLGvhu1IlXaxZnYgexLZU+4wa8o1nwrpngD40+E4fDF3cLJeXKG4tWbf5MTOFIDdSpXfwckbc5OePSPiP8AFbTPA9s1rb+Xe606/u7YNlYvRpMdB7dT7da5v4UeC9Xv9bl+IPixnfUroE2kci4KqRjzCO3y/Ko7D8KQ1fqezUUUUyQooooAKKKKACiiigAoork/FnxH8NeDlKajfCS8x8tlbfvJj6ZH8P1YigDrKjnt4LqFobiGOaJvvJIoZT9Qa8sPiv4oeJYTP4e8KW2lWbEbJNTf964P8QUkYGOeh9iaSXwh8WNQVJLrx1aWsgXmO1gwoP1Crmgdin8QvgXYa0smo+F1h0/UOWe1+7BN/ugfcb6cfTk1l/Cr4l6lp2sr4J8YeZHOjeRazXAxIj9onJ6g/wAJ+g5BGNKbRPjR4db7TZa9Za7EvJt5Qu5v++lX9HzXn/xE8Vad4u04nW9HuNC8Y6eFABjOy5TPKHPKkZLDORwRk5pFb6H1NWVrviTRvDVtFcazqENnFK/lo0h+83sBz/hXN/Cbxe/jDwNb3N0++/tWNrdMersoBD/ipB+ua4T432F14s8ceFvCenhRdvDNMGc/KA3c+wETGmSlrY9xhmiuYEnglSWKRQySIwZWB6EEdRWb4h8O6f4n01dO1RHktPOSVo1baJNpyFb1X1FeOfATxBqlnq+qeCNURl+yK80aSN80Lq4V4x6gls8dMH1rqfhzrV54s8eeLteWeU6PG8dlZpuzG2zOWHvjDf8AbSkFrHN/HHQYvD1xonjXRoY7W8tbpIZPKUKGIG6MkD02FfcEDtXeeNPifo3g3RbC/kSS8l1BBJa28RALJgHcSeg5Hr1+tUPjksTfCjUzIpLLLAYz6N5qjP5FvzryX4cabP8AE7xzp82sRK2maDp8EJjAO1hGNsan/ebc59cEUD3Wp9M2c4ubG3uBG0QljVwjDlcjOD9K+LfGun/ZviHrtjBEFA1KZYo17AudoH4EV9s18q+LY4bX9o0C4AWD+17SSTd02ny2JPtg0MIn0/plhDpGj2enwn9xZ26QIW/uooUZ/AV4J8W/jJ9sE3h3wvckW5yl3fRn/WdikZ/u+rd+g469l8dZfFCeEoY9BSY2EjOupNAuZAmBtHHIQ/NuI9geCc8r8GPhP/x7+KvEFv6PYWkq/lKwP/jo/H0oBJbs5jwp8BvEmtlJ9XKaRZMgcGTDysCMjCA/L77iCPSrX7PWq2mn+Nr3T7khJ7222QOT1ZTuK/iMn/gNfTdfD8Nnqsfi6aPRYrh9QtLmSSL7MpZ1MZJ3AD025o2Gnc+4KK8q8E/HDQdbsYrfxBcR6VqqjbJ5oKwyEfxK3Rfo2MeprtG8e+D1j3nxVouMZ4v4ify3ZpkHQ0Vwup/GLwLpindrkdy46JaxtKT+IG38zXFXfx01PXbhrDwP4Wury4PSW4UttHqUTp9S2KLjsz2a/wBQs9Ls5Ly/uobW2jGXlmcIo/E14t4m+MOq+Jb5vD3w5sLi5nfKtfeXzjplAfujp874x6DrT7L4T+KvGt1HqXxF12YIDuTT7dx8vtx8if8AAQSfWvWtB8N6P4YsBZaNp8NpDxu8sfM5HGWY8sfcmkGiPOPAPwWttGuk1vxRMNT1hm80Rsd8cT9ckn77Z7njPr1r1yiimDdwooooEFFFFABRRRQAUyaaK2geeeVIoo1LPI7BVUDqST0FPrwn4p+INW8beLo/h14ZyUVgb6QNhWYAEhiOiJ1Pq3GMgZBpXL+pePfEXxF1qbw98P8ANpp8Zxda04KkL0+T+7nt/Ef9nBNdn4P+GPh/wgBcRwm+1Vjuk1C6G6QseSV7Lz6c+pNbXhTwxp/hDw/baRpyYjiGXkI+aV+7t7n9OnatqgL9gooooEFcl498DaN400SWPUVSC5hQtBfBRvgxzye6+o/kea62uB+MXiZPDfw8vgrD7VqCmzhXPPzghz+C7ufXFA0eV/s6+Iraw8Q6lodwSsmpRpJbsTwXjDErj1KsT/wCuyskGvftM31w0jGPQ9PCxFeRuZQCp/GaT8RXjtt4Y1jwn4X0D4hxsADfgxwFSCFU5Rif7rbXH029d1e0fA2GXUbPxF4tuowlxrOoswXqAqkng+m52H/AaSKfc80+LWp3Hhz4x6ne6W/lXE1oI5DjH+sg2EjHfBBB9Rmvc/hb4aPhb4fabZSx7LqZftVyCMESPzg+6jav/Aaj8R/C/Q/FHjCx8RagZTJaqqvbrjy59pJXdxnqefUDFdtQJvQ8l/aImaL4dWyKeJdSiRvcbJG/moqv+zrpS2vgu/1JkxLe3hUN/eSNQB/48z0/9oixvLrwPZT28TyQW16Hn2qTsBRgGPoMnGf9oV1vwo0yfSfhjodpcwvDN5TSMjjDDe7OMj6MKOofZOyr51+JfgPxbdfF4a1o+lSXcN1LBLBKgBRGjRARITwvKZ54OR34r6KopiTsFFFFAgr5u+AIW5+JOuXbfM/2SQqT/tSpk19IOyojOxwqjJPoK+bP2cTnxnqx9bA/+jEpFLZnsPij4WeE/Fkr3F9p3k3jnLXVq3lyMfU9mPuQa5Bf2cvCwHOqawTtxnzIuuev3K9iop2FdnnukfBPwNpJDtpj30g6Peyl/wDx0YU/lXd2lla6fbrb2VtDbQL92KGMIo+gHFT0UCuFFFFABRRRQAUUUUAFFFFABRRRQBT1a/XStGvtRddyWlvJOw9Qqlv6V5L+z7piz6RrHii73SajfXjRNK45KgByQfdmOf8AdHpXp3iy1lvvBuuWcCl5p9PuIo1HUs0bAD8zXDfALUUvPhpHagjfZXUsTDPPJ3g/+P8A6Uh9D1GiiimIKKKzdd1/S/DWlyajq95HbW0f8THlj6KOrH2FAFq+vrXTLGa9vZ0gtoELySyHCqB3NfPjQ3fx1+JHnqk0PhXTPk3Hglc5IH+25H4KB6c2Z5fE/wAdtWWK3SXSfB9tLy7dZSPXs7+33V9z19w0LQtO8N6PBpel26wWsIwAOrHuzHuT3NLcrYw/iF4fh1P4Y6vpNvCESGz328aL90xAMigf8BA/Gua/Z/vEufhr5KoFa1vZYmIPLEhXyf8AvvH4V6mQCCCMg9RXivwCgl0y98ZaJITiwvUTH+1mRD/6LFAuh7VRRRTEBAIIIyD1FFFFABRRRQAUUUUAUtYLrol+0fEgtpCv12nFfO/7OH/I46r/ANg//wBqJX0nJGssTxt911Kn6Gvmv9nFX/4TTVWH3Bp5B+vmJj+RpFLZn0tRRRTJCiiigAooooAKKKKACiiigAooooAKKKKACvBdRttV+CfjW71yys2u/COpyfv4ouPIJJIHsVJIXPBBx15HvVMlijnheGaNJInBVkdQQw9CD1oGmcdpPxZ8EavbrLHr9tbMRlorw+Syn0O7g/gTVu8+JPgqxjLzeJ9MYDtDOJj+SZNZN58FvAV7cSztovktJ1EFxIiqfUKGwPpjHFNtPgn4CtJVkOjNOy9POuZGH5bsH8aWoaHO6r8c11C5OmeB9Du9Xvn+VJZIyIx/tbR8xH120mkfCfWvE+qx658SdSa7kXJi02KT5EHoSvAHsvXjJ7V6xpuk6do1sLbTLC2s4Ovl28SoCfUgDk1coC/YitbW3srWO2tYI4IIl2pHGoVVHoAOlS0UUxEU9zBbCMzzxxCRxGnmOF3OeijPUnsK8c+Es7L8V/iLb5+V76RyPdZ5B/7MasftF3Ii8DabErlZX1NHXHoscmT+ZFcr+zbbyya7r131jS2jjYn+8zEj/wBBNLqUlpc+iqKKKZIUUUUAFFFFABRRRQAV438EvBereE9a8TJrFg8En7lLeU4KypmQkqRwRwv0717JRQO4UUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDwf9paYraeG4OzyXDn/gIjH/s1aX7ONgkXhDVdQB/eXF95R/3URSP1dq5L9pC8d/FmkWRPyQ2JlA93kYH/ANFivVfgzoR0L4Z6aHXbNfZvZOf7+Nv/AI4EpdS/snfUUUUyAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5S+NUj33xhubaZyY41t4UA/hUorED8WY/jX1VDDHbwRwQoEijUIijooAwBRRSRT2Q+iiimSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q=="
                ></el-image>
              </el-form-item>
            <el-form-item label="家属签字">
              <el-image
                style="width:100px;height:38px"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
            <el-form-item label="反馈人签字">
              <el-image
                style="width:100px;height:38px;border:1px solid #ccc;"
                src="data:image/jpeg;base64,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"
                ></el-image>
            </el-form-item>
            <el-form-item label="反馈日期">
              <el-date-picker
                  v-model="detail.dfc_vaccine"
                  type="date"
                  placeholder=""
                  :picker-options="pickerOptions"
                  style="width: 140px;">
                </el-date-picker>
            </el-form-item>
          </fieldset>
            
        </div>
      </div>
    </el-form>
  </div>
</template>
<style>
.content h2 {
  cursor: pointer;
  margin: 0;
  padding: 0;
  padding-top: 60px;
}

.content h2:hover {
  color: #409EFF;
}

.el-menu-item.is-active {
  background-color: #ecf5ff;
}
fieldset{display:flex;flex-wrap:wrap;border: 1px dashed #ccc;padding: 0px 15px; margin-top: 15px;}
.el-form-item{color:#606266; margin-right: 30px; }
.el-checkbox-group .el-checkbox__label{padding-left:3px;margin-right: 0px; display: inline-block;} 
.el-radio-group .el-radio,.el-checkbox-group .el-checkbox{margin-right: 10px;}
.el-radio-group .el-radio:last-child,.el-checkbox-group .el-checkbox:last-child{margin-right1:0;}
.el-radio.is-bordered+.el-radio.is-bordered,.el-checkbox.is-bordered+.el-checkbox.is-bordered{margin-left: 0;}
</style>
<script>
import RadioNull from '../components/RadioNull.vue'
import CheckBoxAuto from '../components/CheckBoxAuto.vue'
import { parseTime } from '@/utils/index'
import { settings } from 'nprogress';
export default {
  components:{
    RadioNull,
    CheckBoxAuto
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        wait: 'gray',
        fail: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      setting: {
        symptom: '1.无症状|2.头痛|3.头晕|4.心悸|5.胸闷|6.胸痛|7.慢性咳嗽|8.咳痰|9.呼吸困难|10.多饮|11.多尿|12.体重下降|13.乏力|14.关节肿痛|15.视力模糊|16.手脚麻木|17.尿急|18.尿痛|19.便秘|20.腹泻|21.恶心呕吐|22.眼花|23.耳鸣|24.乳房胀痛|25.其他',
        ecg: '1.正常|2.ST-T改变|3.陈旧性心肌梗塞|4.窦性心动过速|5.窦性心动过缓|6.早搏|7.房颤|8.房室传导阻滞|9.其他',
        cerebrovascular: '1.未发现|2.缺血性卒中|3.脑出血|4.蛛网膜下腔出血|5.短暂性脑缺血发作|6.其他',
        kidney_diseases: '1.未发现|2.糖尿病肾病|3.肾功能衰竭|4.急性肾炎|5.慢性肾炎|6.其他',
        heart_diseases: '1.未发现|2.心肌梗死|3.心绞痛|4.冠状动脉运血重建|5.充血性心力衰竭|6.心前区疼痛|7.其他',
        vascular_diseases: '1.未发现|2.夹层动脉瘤|3.动脉闭塞性疾病|4.冠状动脉运血重建|5.充血性心力衰竭|6.心前区疼痛|7.高血压|8.夹层动脉瘤|9.动脉闭塞性疾病|10.其他',
        cardiovascular: '1.未发现|2.心肌梗死|3.心绞痛|4.窦性心动过速|5.窦性心动过缓|6.早搏|7.房颤|8.房室传导阻滞|9.其他',
        eye_diseases: '1.未发现|2.视网膜出血或渗出|3.视乳头水肿|4.白内障|5.其他',
        nervous_system: '1.未发现|2.阿尔茨海默症（老年性痴呆）|3.帕金森病|4.其他',
        other_diseases : '1.未发现|2.糖尿病|3.慢性支气管炎|4.慢性阻塞性肺气肿|5.恶性肿瘤|6.老年性骨关节病|7.其他',
        health_guide: '纳入慢性患者健康管理|2.建议复查|3.建议转诊|4.其他',
      },
      detail: {
        id: 0,
        exam_date: parseTime(new Date(), '{y}-{m}-{d}'),
        symptom: [],
        dietary_like: [],
        drink_type: [],
        mouth_dentition: [],
        galactophore: [],
        ecg: [],
        cerebrovascular: [],
        kidney_diseases: [],
        heart_diseases: [],
        vascular_diseases: [],
        cardiovascular: [],
        eye_diseases: [],
        nervous_system: [],
        other_diseases: [],
        hospital_history: [],
        home_history: [],
        drug_history: [],
        vaccinate_history: [],
        health_evaluation_abnormal: [],
        health_guide: [],
        dangerous_factor_control: [],
        exam: {},
        user: {},
        patient: {},
        patientElder: {}
      },
      testBool: true,
      listLoading: true,
      activeIndex: '',
      items: [
        { id: 'tab_base', title: '基本信息', description: '这是简介部分的内容。' },
        { id: 'tab_symptom', title: '症状', description: '这是简介部分的内容。' },
        { id: 'tab_general', title: '一般状况', description: '这是特性部分的内容。' },
        { id: 'tab_life', title: '生活方式', description: '这是示例部分的内容。' },
        { id: 'tab_viscus', title: '脏器功能', description: '这是示例部分的内容。' },
        { id: 'tab_body', title: '查体', description: '这是示例部分的内容。' },
        { id: 'tab_assist', title: '辅助检查', description: '这是示例部分的内容。' },
        { id: 'tab_health', title: '健康问题', description: '这是示例部分的内容。' },
        { id: 'tab_hospital', title: '住院情况', description: '这是示例部分的内容。' },
        { id: 'tab_medcoin', title: '用药情况', description: '这是示例部分的内容。' },
        { id: 'tab_yufang', title: '预防接种', description: '这是示例部分的内容。' },
        { id: 'tab_pingjia', title: '健康评价', description: '这是示例部分的内容。' },
        { id: 'tab_zhidao', title: '健康指导', description: '这是示例部分的内容。' },
        { id: 'tab_other', title: '其他', description: '这是示例部分的内容。' }
      ]
    }
  },
  computed: {
    pickerOptions() {
      return {
        shortcuts: [{
        text: "　 取消[x]　",
        onClick(picker) {
          picker.handleClear();
        },
      }]
      }
    },
    mouth_toothmiss(){
      return !this.detail.mouth_dentition.join('').includes('2.')
    },
    mouth_toothdecay(){
      return !this.detail.mouth_dentition.join('').includes('3.')
    },
    mouth_denture(){
      return !this.detail.mouth_dentition.join('').includes('4.')
    }
  },
  mounted() {
    this.activeIndex = this.items[0].id
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.onScroll)
  },
  created() { },
  methods: {
    toothChange(v, item){
      if(v){
        item='12345678';
      }else{
        item='000000';
      }
    },
    toothChange1(e){
      var checkBox = e.target;
      var input = checkBox.parentNode.nextElementSibling.querySelector('input');
      if(checkBox.checked){
        if(input.value==''){
          if(input.title){
            input.value=input.title
            input.title='';
          }else{
            input.value='123456'
          }
        }
      }else{
        if(input.value!=''){
          input.title=input.value;
        }
        input.value=''
      }
    },
    sync1(value){
      if(value.join('|').indexOf('6.建议接种')<0){
        this.detail.dfc_vaccine=''
      }
    },
    querySearch(queryString, cb){
      return cb([{ "value": "跑步"},{"value": "跳舞"}]);
    },
    handleSelect(key, keyPath) {
      // this.activeIndex = key
    },
    addItem(list) {
      list.push({})
    },
    removeItem(list,item) {
      var index = list.indexOf(item)
      if (index == -1) {
        list.splice(list.length-1, 1) 
      }else{
         list.splice(index, 1) 
      }
    },
    showValue (value) {
      alert(value);
    },
    scrollTo(item) {
      const target = document.getElementById(item.id)
      target.scrollIntoView()
    },
    onScroll() {
      var menuItems = this.$data.items
      var scrollTop = document.documentElement.scrollTop
      var activeIndex1 = ''
      for (let i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i]
        var section = document.getElementById(menuItem.id)
        //document.title = scrollTop + '?>' + section.offsetTop + '+' + section.offsetHeight
        if (scrollTop > section.offsetTop) {
          // window.alert(menuItem.id)
          activeIndex1 = menuItem.id
        }
      }

      this.activeIndex = activeIndex1
    }
  }
}
</script>
